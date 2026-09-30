import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { courses } from "@/data/courses";
import { getCreator } from "@/data/creators";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/creators_/$slug")({
  loader: ({ params }) => {
    const creator = getCreator(params.slug);
    if (!creator) throw notFound();
    return { creator };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.creator.name} — ByteSpace` : "Creator not found — ByteSpace";
    const d = loaderData?.creator.role ?? "This creator could not be found.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="p-16 text-center">
      <p>Creator not found.</p>
      <Link to="/creators" className="text-primary underline">All creators</Link>
    </div>
  ),
  errorComponent: () => <div className="p-16 text-center">Something went wrong.</div>,
  component: CreatorPage,
});

function CreatorPage() {
  const { creator } = Route.useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);
  const list = courses.filter((c) => c.creatorSlug === creator.slug);

  useEffect(() => {
    if (!user) return setFollowing(false);
    supabase
      .from("follows")
      .select("id")
      .eq("user_id", user.id)
      .eq("creator_slug", creator.slug)
      .maybeSingle()
      .then(({ data }) => setFollowing(!!data));
  }, [user, creator.slug]);

  const toggle = async () => {
    if (!user) {
      navigate({ to: "/login", search: { redirect: `/creators/${creator.slug}` } });
      return;
    }
    const q = following
      ? supabase.from("follows").delete().eq("user_id", user.id).eq("creator_slug", creator.slug)
      : supabase.from("follows").insert({ user_id: user.id, creator_slug: creator.slug });
    const { error } = await q;
    if (error) { toast.error(error.message); return; }
    setFollowing(!following);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bs-grid overflow-hidden pb-14">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <div className="bs-container mt-8 flex flex-wrap items-center gap-5 text-white">
            <img src={creator.avatar} alt="" className="h-20 w-20 rounded-2xl object-cover" />
            <div className="flex-1">
              <h1 className="font-display text-3xl font-semibold">{creator.name}</h1>
              <p className="text-white/90">{creator.role}</p>
              <p className="mt-1 text-xs text-white/80">
                {creator.products} products · {creator.followers + (following ? 1 : 0)} followers
              </p>
            </div>
            <button onClick={toggle} className="rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink">
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>
      <div className="bs-container py-12">
        {creator.bio.map((p) => (
          <p key={p} className="mb-3 max-w-3xl text-muted-foreground">{p}</p>
        ))}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
