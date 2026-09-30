import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RatingBar, Stars } from "@/components/RatingBar";
import { getCourse, lessonList } from "@/data/courses";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses/$id")({
  validateSearch: zodValidator(z.object({ tab: fallback(z.string(), "details").default("details") })),
  loader: ({ params }) => {
    const course = getCourse(params.id);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.course.title} — ByteSpace` : "Course not found — ByteSpace";
    const d = loaderData?.course.subtitle ?? "This course could not be found.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="p-16 text-center">
      <p>Course not found.</p>
      <Link to="/courses" className="text-primary underline">Browse courses</Link>
    </div>
  ),
  errorComponent: () => <div className="p-16 text-center">Something went wrong.</div>,
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const { tab } = Route.useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    if (!user) return setEnrolled(false);
    supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", course.id)
      .maybeSingle()
      .then(({ data }) => setEnrolled(!!data));
  }, [user, course.id]);

  const enroll = async () => {
    if (!user) {
      navigate({ to: "/login", search: { redirect: `/courses/${course.id}` } });
      return;
    }
    const { error } = await supabase.from("enrollments").insert({ user_id: user.id, course_id: course.id });
    if (error && !error.message.includes("duplicate")) { toast.error(error.message); return; }
    setEnrolled(true);
    toast.success("You're enrolled!");
  };

  const max = Math.max(...course.ratingBreakdown, 1);

  return (
    <div className="min-h-screen bg-background">
      <section className="bs-grid overflow-hidden pb-14">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <div className="bs-container mt-8 text-white">
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">{course.title}</h1>
            <p className="mt-2 max-w-2xl text-white/90">{course.subtitle}</p>
            <p className="mt-3 text-sm">
              by{" "}
              <Link to="/creators/$slug" params={{ slug: course.creatorSlug }} className="text-lime">
                {course.creator}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="bs-container grid gap-10 py-12 lg:grid-cols-[1fr_340px]">
        <div>
          <img src={course.image} alt={course.title} className="aspect-video w-full rounded-2xl object-cover" />
          <div className="mt-8 flex gap-6 border-b border-border">
            {(["details", "reviews"] as const).map((t) => (
              <Link
                key={t}
                to="/courses/$id"
                params={{ id: course.id }}
                search={{ tab: t }}
                className={cn("pb-3 text-sm capitalize", tab === t ? "border-b-2 border-primary text-ink" : "text-muted-foreground")}
              >
                {t}
              </Link>
            ))}
          </div>

          {tab === "reviews" ? (
            <div className="mt-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div>
                  <p className="font-display text-4xl font-semibold">{course.rating}</p>
                  <Stars value={Math.round(course.rating)} />
                  <p className="text-xs text-muted-foreground">{course.reviewCount} reviews</p>
                </div>
                <div className="flex-1 space-y-2">
                  {course.ratingBreakdown.map((n, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="w-4">{5 - i}</span>
                      <RatingBar count={n} max={max} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-6">
                {course.reviews.filter((r) => !r.hidden).map((r) => (
                  <div key={r.name} className="rounded-2xl border border-border p-5">
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} alt="" className="h-10 w-10 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.role} · {r.when}</p>
                      </div>
                    </div>
                    <Stars value={r.stars} className="mt-3" />
                    <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <p className="text-muted-foreground">{course.description}</p>
              {course.modules.map((m) => (
                <div key={m.title}>
                  <h3 className="font-display font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-border p-6">
          <p className="font-display text-3xl font-semibold text-primary">
            ${course.price}<span className="text-sm text-muted-foreground">/lifetime</span>
          </p>
          <p className="mt-2 flex items-center gap-1 text-sm">
            {course.rating} <Star className="h-4 w-4 fill-lime text-lime" /> ({course.reviewCount})
          </p>
          <button
            onClick={enroll}
            disabled={enrolled}
            className="mt-5 w-full rounded-full bg-primary py-3 text-sm text-primary-foreground disabled:opacity-70"
          >
            {enrolled ? "Enrolled" : "Enroll now"}
          </button>
          <ul className="mt-6 space-y-3 text-sm">
            {lessonList.map((l) => (
              <li key={l.n} className="flex justify-between gap-3">
                <span>{l.n}. {l.title}</span>
                <span className="text-muted-foreground">{l.mins}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
