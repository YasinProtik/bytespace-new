import { Link } from "@tanstack/react-router";
import { BarChart3, Star } from "lucide-react";
import type { ReactNode } from "react";

import { AvatarStack } from "@/components/AvatarStack";
import { LogoMark, Shape } from "@/components/brand";
import bigData from "@/assets/course-big-data.jpg";
import digitalAsset from "@/assets/course-digital-asset.jpg";

export function AuthLayout({
  heading,
  intro,
  children,
}: {
  heading: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="bs-grid relative min-h-screen overflow-hidden">
      <div className="bs-grid-lines" />
      <div className="bs-container relative py-10">
        <Link to="/" aria-label="ByteSpace home">
          <LogoMark className="h-9 w-9" />
        </Link>

        <div className="mt-8 grid items-center gap-12 pb-16 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)]">
          <div className="hidden lg:block">
            <h2 className="font-display text-[22px] font-semibold text-white">{heading}</h2>
            <p className="mt-3 max-w-md text-[18px] font-light text-white/90">{intro}</p>

            <div className="relative mt-14 h-[420px]">
              {/* back card */}
              <div className="absolute left-0 top-16 w-64 rounded-2xl bg-white p-3 shadow-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={digitalAsset} alt="" loading="lazy" className="h-36 w-full object-cover" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-black/45 px-2 py-1 text-[10px] text-white">
                    17 Lessons
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">Build Digital</h3>
                <p className="text-xs text-muted-foreground">
                  by <span className="text-primary">purepearl studio</span>
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs">
                    <BarChart3 className="h-3.5 w-3.5" /> Beginner
                  </span>
                  <AvatarStack labelTone="black" />
                </div>
                <p className="mt-3 text-sm">
                  <span className="font-display font-semibold text-primary">$25</span>
                  <span className="text-xs text-muted-foreground">/lifetime</span>
                </p>
              </div>

              {/* front card */}
              <div className="absolute left-28 top-0 w-72 rounded-2xl bg-white p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={bigData} alt="" loading="lazy" className="h-40 w-full object-cover" />
                  <div className="absolute inset-x-2 bottom-2 flex justify-between text-[10px] text-white">
                    <span className="rounded-full bg-black/45 px-2 py-1">17 Lessons</span>
                    <span className="rounded-full bg-black/45 px-2 py-1">2 hours 16 mins</span>
                    <span className="rounded-full bg-black/45 px-2 py-1">59 Comments</span>
                  </div>
                </div>
                <div className="mt-3 flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    the Power of Big Data
                  </h3>
                  <span className="flex items-center gap-1 text-sm">
                    4.5 <Star className="h-4 w-4 fill-lime text-lime" />
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  by <span className="text-primary">purepearl studio</span>
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs">
                    <BarChart3 className="h-3.5 w-3.5" /> Beginner
                  </span>
                  <AvatarStack labelTone="black" />
                </div>
                <p className="mt-3 text-sm">
                  <span className="font-display font-semibold text-primary">$25</span>
                  <span className="text-xs text-muted-foreground">/lifetime</span>
                </p>
              </div>

              {/* happy students */}
              <div className="absolute bottom-0 right-0 w-64 rounded-2xl bg-lime p-4 shadow-xl">
                <p className="font-display text-sm font-semibold text-ink">Happy Students</p>
                <p className="flex items-center gap-1 text-xs text-ink">
                  <span className="font-semibold">4.5</span>
                  <span className="text-ink/60">(240)</span>
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                </p>
                <AvatarStack className="mt-3" count={6} label="2K+" size={32} labelTone="black" start={3} />
              </div>

              <Shape kind="torus" className="-left-4 -top-6 h-28 w-28" />
              <Shape kind="pyramid" className="bottom-4 left-0 h-32 w-32" />
              <Shape kind="squiggle" color="white" className="-right-6 top-40 h-28 w-28" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[600px] rounded-[32px] bg-white p-8 sm:p-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
