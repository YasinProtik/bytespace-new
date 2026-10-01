import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Footer, o as Navbar } from "./Navbar-DKzUKqjX.mjs";
import { t as creators } from "./creators-GJvMaSrB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators-CTkmm3Sj.js
var import_jsx_runtime = require_jsx_runtime();
function CreatorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid overflow-hidden pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "bs-container mt-6 text-center font-display text-3xl font-semibold text-white",
						children: "Creators"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bs-container grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3",
				children: creators.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/creators/$slug",
					params: { slug: c.slug },
					className: "rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.avatar,
							alt: "",
							loading: "lazy",
							className: "h-14 w-14 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display font-semibold text-ink",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: c.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-primary",
							children: [c.followers, " Followers"]
						})
					]
				}, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CreatorsPage as component };
