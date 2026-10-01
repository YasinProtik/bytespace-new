import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators_._slug-BoIYD7XS.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "p-16 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Creator not found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/creators",
		className: "text-primary underline",
		children: "All creators"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
