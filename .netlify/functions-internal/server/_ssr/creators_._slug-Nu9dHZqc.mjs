import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DvJwIeYa.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useAuth } from "./useAuth-XMFpjxcY.mjs";
import { o as courses } from "./courses-EvJM9Vz5.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Footer, o as Navbar } from "./Navbar-DKzUKqjX.mjs";
import { t as CourseCard } from "./CourseCard-Bh1POXKg.mjs";
import { t as Route } from "./creators_._slug-UuCt2XH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators_._slug-Nu9dHZqc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CreatorPage() {
	const { creator } = Route.useLoaderData();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [following, setFollowing] = (0, import_react.useState)(false);
	const list = courses.filter((c) => c.creatorSlug === creator.slug);
	(0, import_react.useEffect)(() => {
		if (!user) return setFollowing(false);
		supabase.from("follows").select("id").eq("user_id", user.id).eq("creator_slug", creator.slug).maybeSingle().then(({ data }) => setFollowing(!!data));
	}, [user, creator.slug]);
	const toggle = async () => {
		if (!user) {
			navigate({
				to: "/login",
				search: { redirect: `/creators/${creator.slug}` }
			});
			return;
		}
		const { error } = await (following ? supabase.from("follows").delete().eq("user_id", user.id).eq("creator_slug", creator.slug) : supabase.from("follows").insert({
			user_id: user.id,
			creator_slug: creator.slug
		}));
		if (error) {
			toast.error(error.message);
			return;
		}
		setFollowing(!following);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid overflow-hidden pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bs-container mt-8 flex flex-wrap items-center gap-5 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: creator.avatar,
								alt: "",
								className: "h-20 w-20 rounded-2xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-display text-3xl font-semibold",
										children: creator.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/90",
										children: creator.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-white/80",
										children: [
											creator.products,
											" products · ",
											creator.followers + (following ? 1 : 0),
											" followers"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								className: "rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink",
								children: following ? "Following" : "Follow"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bs-container py-12",
				children: [creator.bio.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 max-w-3xl text-muted-foreground",
					children: p
				}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { course: c }, c.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CreatorPage as component };
