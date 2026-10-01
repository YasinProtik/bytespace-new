import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DvJwIeYa.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useAuth } from "./useAuth-XMFpjxcY.mjs";
import { l as lessonList } from "./courses-EvJM9Vz5.mjs";
import { t as Route } from "./courses._id-Dg3IPNor.mjs";
import { i as cn } from "./brand-B03-_1xZ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Star } from "../_libs/lucide-react.mjs";
import { a as Footer, o as Navbar } from "./Navbar-DKzUKqjX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._id-5Fsjj5fc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stars({ value = 5, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `flex items-center gap-1 ${className}`,
		children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: i < value ? "h-3.5 w-3.5 fill-[#3f3f3f] text-[#3f3f3f]" : "h-3.5 w-3.5 fill-border text-border" }, i))
	});
}
function RatingBar({ count, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 w-full rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 rounded-full bg-lime",
			style: { width: `${Math.max(2, count / max * 100)}%` }
		})
	});
}
function CoursePage() {
	const { course } = Route.useLoaderData();
	const { tab } = Route.useSearch();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [enrolled, setEnrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!user) return setEnrolled(false);
		supabase.from("enrollments").select("id").eq("user_id", user.id).eq("course_id", course.id).maybeSingle().then(({ data }) => setEnrolled(!!data));
	}, [user, course.id]);
	const enroll = async () => {
		if (!user) {
			navigate({
				to: "/login",
				search: { redirect: `/courses/${course.id}` }
			});
			return;
		}
		const { error } = await supabase.from("enrollments").insert({
			user_id: user.id,
			course_id: course.id
		});
		if (error && !error.message.includes("duplicate")) {
			toast.error(error.message);
			return;
		}
		setEnrolled(true);
		toast.success("You're enrolled!");
	};
	const max = Math.max(...course.ratingBreakdown, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid overflow-hidden pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bs-container mt-8 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl font-semibold sm:text-4xl",
								children: course.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-white/90",
								children: course.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm",
								children: [
									"by",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/creators/$slug",
										params: { slug: course.creatorSlug },
										className: "text-lime",
										children: course.creator
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bs-container grid gap-10 py-12 lg:grid-cols-[1fr_340px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: course.image,
						alt: course.title,
						className: "aspect-video w-full rounded-2xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-6 border-b border-border",
						children: ["details", "reviews"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses/$id",
							params: { id: course.id },
							search: { tab: t },
							className: cn("pb-3 text-sm capitalize", tab === t ? "border-b-2 border-primary text-ink" : "text-muted-foreground"),
							children: t
						}, t))
					}),
					tab === "reviews" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl font-semibold",
									children: course.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: Math.round(course.rating) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [course.reviewCount, " reviews"]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 space-y-2",
								children: course.ratingBreakdown.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-4",
										children: 5 - i
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatingBar, {
										count: n,
										max
									})]
								}, i))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-6",
							children: course.reviews.filter((r) => !r.hidden).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: r.avatar,
											alt: "",
											className: "h-10 w-10 rounded-full"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												r.role,
												" · ",
												r.when
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
										value: r.stars,
										className: "mt-3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: r.text
									})
								]
							}, r.name))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: course.description
						}), course.modules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold",
							children: m.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: m.description
						})] }, m.title))]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl font-semibold text-primary",
							children: [
								"$",
								course.price,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: "/lifetime"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex items-center gap-1 text-sm",
							children: [
								course.rating,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-lime text-lime" }),
								" (",
								course.reviewCount,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: enroll,
							disabled: enrolled,
							className: "mt-5 w-full rounded-full bg-primary py-3 text-sm text-primary-foreground disabled:opacity-70",
							children: enrolled ? "Enrolled" : "Enroll now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: lessonList.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									l.n,
									". ",
									l.title
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: l.mins
								})]
							}, l.n))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CoursePage as component };
