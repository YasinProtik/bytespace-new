import { createFileRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { Search } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { CategoryPills } from "@/components/CategoryPills";
import { CourseCard } from "@/components/CourseCard";
import { FilterBar } from "@/components/FilterBar";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { courses, coursesPageCategories } from "@/data/courses";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.string(), "Featured").default("Featured"),
  level: fallback(z.string(), "").default(""),
  sort: fallback(z.string(), "Most relevant").default("Most relevant"),
});

export const Route = createFileRoute("/courses/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Browse Courses — ByteSpace" },
      { name: "description", content: "Search and filter courses from ByteSpace creators." },
      { property: "og:title", content: "Browse Courses — ByteSpace" },
      { property: "og:description", content: "Search and filter courses from ByteSpace creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q);
  const set = (patch: Partial<typeof search>) =>
    navigate({ to: ".", search: (prev) => ({ ...prev, ...patch }), replace: true });

  let list = courses.filter((c) => {
    const q = search.q.toLowerCase();
    if (q && !`${c.title} ${c.creator} ${c.category}`.toLowerCase().includes(q)) return false;
    if (search.level && c.level !== search.level) return false;
    if (search.category !== "Featured" && c.category !== search.category) return false;
    return true;
  });
  if (search.sort === "Highest rated") list = [...list].sort((a, b) => b.rating - a.rating);
  if (search.sort === "Price: low to high") list = [...list].sort((a, b) => a.price - b.price);
  if (search.sort === "Price: high to low") list = [...list].sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-background">
      <section className="bs-grid overflow-hidden pb-14">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <form
            className="bs-container mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2"
            onSubmit={(e) => {
              e.preventDefault();
              set({ q: query });
            }}
          >
            <Search className="ml-3 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
            />
            <button className="rounded-full bg-primary px-6 py-2 text-sm text-primary-foreground">
              Search
            </button>
          </form>
        </div>
      </section>

      <div className="bs-container py-12">
        <FilterBar
          level={search.level}
          onLevel={(level) => set({ level })}
          category={search.category === "Featured" ? "" : search.category}
          onCategory={(category) => set({ category: category || "Featured" })}
          sort={search.sort}
          onSort={(sort) => set({ sort })}
        />
        <CategoryPills
          className="mt-8"
          items={coursesPageCategories}
          active={search.category}
          onSelect={(category) => set({ category })}
        />
        {list.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">No courses match your search.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
