import { Link, createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { creators } from "@/data/creators";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Creators — ByteSpace" },
      { name: "description", content: "Meet the creators publishing courses on ByteSpace." },
      { property: "og:title", content: "Creators — ByteSpace" },
      { property: "og:description", content: "Meet the creators publishing courses on ByteSpace." },
    ],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bs-grid overflow-hidden pb-14">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <h1 className="bs-container mt-6 text-center font-display text-3xl font-semibold text-white">
            Creators
          </h1>
        </div>
      </section>

      <div className="bs-container grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map((c) => (
          <Link
            key={c.slug}
            to="/creators/$slug"
            params={{ slug: c.slug }}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <img src={c.avatar} alt="" loading="lazy" className="h-14 w-14 rounded-xl object-cover" />
            <p className="mt-4 font-display font-semibold text-ink">{c.name}</p>
            <p className="text-xs text-muted-foreground">{c.role}</p>
            <p className="mt-3 text-xs text-primary">{c.followers} Followers</p>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
