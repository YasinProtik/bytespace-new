import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-B03-_1xZ.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 32 32",
		className: cn("h-7 w-7", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 3v20.5C8 27.6 11.2 30 15.2 30 21.7 30 26 25.6 26 19.5 26 13.7 22 10 16.8 10c-1.9 0-3.6.6-4.8 1.6V3H8z",
			fill: "var(--lime)"
		})
	});
}
function Logo({ tone = "light", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display text-xl font-bold", tone === "light" ? "text-white" : "text-ink"),
			children: "ByteSpace"
		})]
	});
}
/** Decorative 3D shapes placed at the corners of blue sections. */
function Shape({ kind, color = "lime", className }) {
	const fill = color === "lime" ? "var(--lime)" : "#ffffff";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pointer-events-none absolute select-none", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 120 120",
			className: "h-full w-full",
			children: [
				kind === "squiggle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M15 30c25-18 55 6 35 20-20 14-45-2-30 14 14 15 50 8 60-6",
					fill: "none",
					stroke: fill,
					strokeWidth: "22",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				kind === "torus" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "36",
					fill: "none",
					stroke: fill,
					strokeWidth: "24"
				}),
				kind === "cone" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 14 L104 104 L16 104 Z",
					fill
				}),
				kind === "cylinder" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					fill,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "26",
						y: "26",
						width: "68",
						height: "68",
						rx: "16"
					})
				}),
				kind === "pyramid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 18 L106 100 L14 100 Z",
					fill,
					opacity: "0.95"
				})
			]
		})
	});
}
//#endregion
export { cn as i, LogoMark as n, Shape as r, Logo as t };
