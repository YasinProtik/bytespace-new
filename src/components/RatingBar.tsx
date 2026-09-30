import { Star } from "lucide-react";

export function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={
            i < value
              ? "h-3.5 w-3.5 fill-[#3f3f3f] text-[#3f3f3f]"
              : "h-3.5 w-3.5 fill-border text-border"
          }
        />
      ))}
    </span>
  );
}

export function RatingBar({ count, max }: { count: number; max: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-secondary">
      <div
        className="h-2 rounded-full bg-lime"
        style={{ width: `${Math.max(2, (count / max) * 100)}%` }}
      />
    </div>
  );
}
