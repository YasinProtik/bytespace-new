import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as cn } from "./brand-B03-_1xZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CategoryPills-MRMn-BUH.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPills({ items, active, onSelect, showMore, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap items-center justify-center gap-3", className),
		children: [items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onSelect(item),
			className: cn("rounded-full px-4 py-2 text-xs transition-colors", active === item ? "bg-lime font-medium text-ink" : "bg-secondary text-ink hover:bg-border"),
			children: item
		}, item)), showMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/courses",
			className: "px-2 text-xs text-primary hover:underline",
			children: "+ More"
		})]
	});
}
//#endregion
export { CategoryPills as t };
