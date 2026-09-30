import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "@/components/brand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/creators", label: "Creators" },
] as const;

export function Navbar() {
  const { user, initials, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    toast("You have been logged out");
    navigate({ to: "/" });
  };

  return (
    <header className="relative z-30">
      <nav className="bs-container flex h-20 items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-white/80 transition-colors hover:text-white data-[status=active]:font-medium data-[status=active]:text-white data-[status=active]:underline data-[status=active]:underline-offset-8"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-sm font-semibold text-ink">
                {initials || "U"}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => navigate({ to: "/dashboard" })}>
                  My Courses
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate({ to: "/dashboard" })}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleLogout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden items-center gap-5 md:flex">
              <Link to="/login" className="text-sm text-white/90 hover:text-white">
                Sign In
              </Link>
              <Link to="/signup" className="text-sm text-white/90 hover:text-white">
                Join Us
              </Link>
            </div>
          )}

          <button type="button" aria-label="Cart" className="text-white/90 hover:text-white">
            <ShoppingBag className="h-5 w-5" />
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="text-white md:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-10 flex flex-col gap-5">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
                {!user && (
                  <>
                    <Link to="/login" onClick={() => setOpen(false)} className="text-lg text-ink">
                      Sign In
                    </Link>
                    <Link to="/signup" onClick={() => setOpen(false)} className="text-lg text-ink">
                      Join Us
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
