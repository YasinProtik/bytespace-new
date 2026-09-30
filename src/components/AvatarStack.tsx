import { cn } from "@/lib/utils";
import { avatar } from "@/data/courses";

export function AvatarStack({
  count = 4,
  label = "26+",
  size = 26,
  labelTone = "lime",
  start = 1,
  className,
}: {
  count?: number;
  label?: string;
  size?: number;
  labelTone?: "lime" | "black";
  start?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: count }, (_, i) => (
        <img
          key={i}
          src={avatar(start + i * 7)}
          alt=""
          loading="lazy"
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -8 }}
          className="rounded-full border-2 border-white object-cover"
        />
      ))}
      <span
        style={{ width: size, height: size, marginLeft: -8, fontSize: size * 0.38 }}
        className={cn(
          "z-10 grid place-items-center rounded-full border-2 border-white font-semibold",
          labelTone === "lime" ? "bg-lime text-ink" : "bg-ink text-white",
        )}
      >
        {label}
      </span>
    </div>
  );
}
