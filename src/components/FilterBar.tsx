import { ArrowDownWideNarrow, BarChart3, Shapes, SlidersHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/data/courses";
import { cn } from "@/lib/utils";

export const sortOptions = [
  "Most relevant",
  "Newest",
  "Highest rated",
  "Price: low to high",
  "Price: high to low",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

const pill =
  "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-ink transition-colors hover:border-ink";

export function FilterBar({
  level,
  onLevel,
  category,
  onCategory,
  sort,
  onSort,
  className,
}: {
  level: string;
  onLevel: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  sort: string;
  onSort: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-3", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <Sheet>
          <SheetTrigger className={pill}>
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Filter</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-8 px-4">
              <div>
                <p className="mb-3 text-sm font-medium">Price range</p>
                <Slider defaultValue={[25]} max={200} step={5} />
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">Rating</p>
                <Slider defaultValue={[4]} max={5} step={0.5} />
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">Duration (hours)</p>
                <Slider defaultValue={[10]} max={40} step={1} />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger className={cn(pill, level && "border-ink")}>
            <BarChart3 className="h-3.5 w-3.5" /> {level || "Level"}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onSelect={() => onLevel("")}>All levels</DropdownMenuItem>
            {levels.map((l) => (
              <DropdownMenuItem key={l} onSelect={() => onLevel(l)}>
                {l}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className={cn(pill, category && "border-ink")}>
            <Shapes className="h-3.5 w-3.5" /> {category || "Category"}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="max-h-72 overflow-y-auto">
            <DropdownMenuItem onSelect={() => onCategory("")}>All categories</DropdownMenuItem>
            {categories.slice(1).map((c) => (
              <DropdownMenuItem key={c} onSelect={() => onCategory(c)}>
                {c}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className={pill}>
          <ArrowDownWideNarrow className="h-3.5 w-3.5" /> {sort}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {sortOptions.map((s) => (
            <DropdownMenuItem key={s} onSelect={() => onSort(s)}>
              {s}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
