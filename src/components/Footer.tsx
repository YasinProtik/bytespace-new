import { LogoMark } from "@/components/brand";
import { Link } from "@tanstack/react-router";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="bs-container py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-xl font-bold text-ink">ByteSpace</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form
              className="mt-5 flex items-center gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-full border border-border px-5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-lime px-6 text-sm font-medium text-ink transition-colors hover:bg-lime-dark"
              >
                Search
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((item) => (
                  <li key={item}>
                    <span className="cursor-pointer text-sm text-muted-foreground hover:text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2025 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
