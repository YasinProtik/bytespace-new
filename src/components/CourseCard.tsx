import { Link, useNavigate } from "@tanstack/react-router";
import { BarChart3, Star } from "lucide-react";

import { AvatarStack } from "@/components/AvatarStack";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const navigate = useNavigate();
  return (
    <Link
      to="/courses/$id"
      params={{ id: course.id }}
      className={cn(
        "group block rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[10px] text-white">
          <span className="rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm">
            {course.lessonsCount}
          </span>
          <span className="rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate font-display text-[15px] font-semibold text-ink">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-ink">
            {course.rating}
            <Star className="h-3.5 w-3.5 fill-muted-foreground text-muted-foreground" />
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          by{" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate({ to: "/creators/$slug", params: { slug: course.creatorSlug } });
            }}
            className="text-primary hover:underline"
          >
            {course.creator}
          </button>
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs text-ink">
            <BarChart3 className="h-3.5 w-3.5" />
            {course.level}
          </span>
          <AvatarStack />
        </div>

        <p className="mt-3 text-sm">
          <span className="font-display font-semibold text-primary">${course.price}</span>
          <span className="text-xs text-muted-foreground">/lifetime</span>
        </p>
      </div>
    </Link>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="h-40 w-full animate-pulse rounded-xl bg-secondary" />
      <div className="mt-4 h-4 w-2/3 animate-pulse rounded bg-secondary" />
      <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-secondary" />
      <div className="mt-4 h-6 w-full animate-pulse rounded bg-secondary" />
    </div>
  );
}
