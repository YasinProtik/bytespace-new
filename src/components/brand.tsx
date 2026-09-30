import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-7 w-7", className)} aria-hidden="true">
      <path
        d="M8 3v20.5C8 27.6 11.2 30 15.2 30 21.7 30 26 25.6 26 19.5 26 13.7 22 10 16.8 10c-1.9 0-3.6.6-4.8 1.6V3H8z"
        fill="var(--lime)"
      />
    </svg>
  );
}

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-xl font-bold",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}

/** Decorative 3D shapes placed at the corners of blue sections. */
export function Shape({
  kind,
  color = "lime",
  className,
}: {
  kind: "squiggle" | "torus" | "cone" | "cylinder" | "pyramid";
  color?: "lime" | "white";
  className?: string;
}) {
  const fill = color === "lime" ? "var(--lime)" : "#ffffff";
  return (
    <div className={cn("pointer-events-none absolute select-none", className)} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        {kind === "squiggle" && (
          <path
            d="M15 30c25-18 55 6 35 20-20 14-45-2-30 14 14 15 50 8 60-6"
            fill="none"
            stroke={fill}
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {kind === "torus" && (
          <circle cx="60" cy="60" r="36" fill="none" stroke={fill} strokeWidth="24" />
        )}
        {kind === "cone" && <path d="M60 14 L104 104 L16 104 Z" fill={fill} />}
        {kind === "cylinder" && (
          <g fill={fill}>
            <rect x="26" y="26" width="68" height="68" rx="16" />
          </g>
        )}
        {kind === "pyramid" && <path d="M60 18 L106 100 L14 100 Z" fill={fill} opacity="0.95" />}
      </svg>
    </div>
  );
}
