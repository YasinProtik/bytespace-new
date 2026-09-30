import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

export function CategoryPills({
  items,
  active,
  onSelect,
  showMore,
  className,
}: {
  items: string[];
  active: string;
  onSelect: (value: string) => void;
  showMore?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={cn(
            "rounded-full px-4 py-2 text-xs transition-colors",
            active === item
              ? "bg-lime font-medium text-ink"
              : "bg-secondary text-ink hover:bg-border",
          )}
        >
          {item}
        </button>
      ))}
      {showMore && (
        <Link to="/courses" className="px-2 text-xs text-primary hover:underline">
          + More
        </Link>
      )}
    </div>
  );
}
