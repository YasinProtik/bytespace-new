import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as avatar } from "./courses-EvJM9Vz5.mjs";
import { i as cn } from "./brand-B03-_1xZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AvatarStack-CHfOREiP.js
var import_jsx_runtime = require_jsx_runtime();
function AvatarStack({ count = 4, label = "26+", size = 26, labelTone = "lime", start = 1, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center", className),
		children: [Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: avatar(start + i * 7),
			alt: "",
			loading: "lazy",
			style: {
				width: size,
				height: size,
				marginLeft: i === 0 ? 0 : -8
			},
			className: "rounded-full border-2 border-white object-cover"
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				width: size,
				height: size,
				marginLeft: -8,
				fontSize: size * .38
			},
			className: cn("z-10 grid place-items-center rounded-full border-2 border-white font-semibold", labelTone === "lime" ? "bg-lime text-ink" : "bg-ink text-white"),
			children: label
		})]
	});
}
//#endregion
export { AvatarStack as t };
