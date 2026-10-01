import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as categories, o as courses, s as coursesPageCategories } from "./courses-EvJM9Vz5.mjs";
import { i as cn } from "./brand-B03-_1xZ.mjs";
import { a as Shapes, g as ChartColumn, o as Search, r as SlidersHorizontal, y as ArrowDownWideNarrow } from "../_libs/lucide-react.mjs";
import { a as Footer, c as SheetContent, d as SheetTrigger, i as DropdownMenuTrigger, l as SheetHeader, n as DropdownMenuContent, o as Navbar, r as DropdownMenuItem, s as Sheet, t as DropdownMenu, u as SheetTitle } from "./Navbar-DKzUKqjX.mjs";
import { t as Route } from "./courses.index-BOooNw2s.mjs";
import { t as CategoryPills } from "./CategoryPills-MRMn-BUH.mjs";
import { t as CourseCard } from "./CourseCard-Bh1POXKg.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-DKIxt2sJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var sortOptions = [
	"Most relevant",
	"Newest",
	"Highest rated",
	"Price: low to high",
	"Price: high to low"
];
var levels = [
	"Beginner",
	"Intermediate",
	"Advanced"
];
var pill = "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-ink transition-colors hover:border-ink";
function FilterBar({ level, onLevel, category, onCategory, sort, onSort, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap items-center justify-between gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTrigger, {
					className: pill,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5" }), " Filter"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "w-80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Filter" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-8 px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-sm font-medium",
								children: "Price range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								defaultValue: [25],
								max: 200,
								step: 5
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-sm font-medium",
								children: "Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								defaultValue: [4],
								max: 5,
								step: .5
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-sm font-medium",
								children: "Duration (hours)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								defaultValue: [10],
								max: 40,
								step: 1
							})] })
						]
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
					className: cn(pill, level && "border-ink"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }),
						" ",
						level || "Level"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => onLevel(""),
						children: "All levels"
					}), levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => onLevel(l),
						children: l
					}, l))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
					className: cn(pill, category && "border-ink"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shapes, { className: "h-3.5 w-3.5" }),
						" ",
						category || "Category"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "start",
					className: "max-h-72 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => onCategory(""),
						children: "All categories"
					}), categories.slice(1).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onSelect: () => onCategory(c),
						children: c
					}, c))]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
			className: pill,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownWideNarrow, { className: "h-3.5 w-3.5" }),
				" ",
				sort
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
			align: "end",
			children: sortOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => onSort(s),
				children: s
			}, s))
		})] })]
	});
}
function CoursesPage() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const [query, setQuery] = (0, import_react.useState)(search.q);
	const set = (patch) => navigate({
		to: ".",
		search: (prev) => ({
			...prev,
			...patch
		}),
		replace: true
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid overflow-hidden pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "bs-container mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2",
						onSubmit: (e) => {
							e.preventDefault();
							set({ q: query });
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-3 h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search courses",
								className: "flex-1 bg-transparent px-2 py-2 text-sm outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-full bg-primary px-6 py-2 text-sm text-primary-foreground",
								children: "Search"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bs-container py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
						level: search.level,
						onLevel: (level) => set({ level }),
						category: search.category === "Featured" ? "" : search.category,
						onCategory: (category) => set({ category: category || "Featured" }),
						sort: search.sort,
						onSort: (sort) => set({ sort })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPills, {
						className: "mt-8",
						items: coursesPageCategories,
						active: search.category,
						onSelect: (category) => set({ category })
					}),
					list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-16 text-center text-muted-foreground",
						children: "No courses match your search."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CoursesPage as component };
