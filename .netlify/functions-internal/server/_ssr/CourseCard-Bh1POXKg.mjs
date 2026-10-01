import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn } from "./brand-B03-_1xZ.mjs";
import { g as ChartColumn, n as Star } from "../_libs/lucide-react.mjs";
import { t as AvatarStack } from "./AvatarStack-CHfOREiP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CourseCard-Bh1POXKg.js
var import_jsx_runtime = require_jsx_runtime();
function CourseCard({ course, className }) {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/courses/$id",
		params: { id: course.id },
		className: cn("group block rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-lg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: course.image,
				alt: course.title,
				loading: "lazy",
				className: "h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[10px] text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm",
						children: course.lessonsCount
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm",
						children: course.duration
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm",
						children: [course.comments, " Comments"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-1 pt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate font-display text-[15px] font-semibold text-ink",
						children: course.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1 text-sm text-ink",
						children: [course.rating, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-muted-foreground text-muted-foreground" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: [
						"by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								navigate({
									to: "/creators/$slug",
									params: { slug: course.creatorSlug }
								});
							},
							className: "text-primary hover:underline",
							children: course.creator
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }), course.level]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-semibold text-primary",
						children: ["$", course.price]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "/lifetime"
					})]
				})
			]
		})]
	});
}
//#endregion
export { CourseCard as t };
