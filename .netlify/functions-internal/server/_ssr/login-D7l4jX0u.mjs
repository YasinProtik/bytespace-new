import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as zodValidator, r as objectType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-D7l4jX0u.js
var $$splitComponentImporter = () => import("./login-OrouXJl2.mjs");
var Route = createFileRoute("/login")({
	validateSearch: zodValidator(objectType({ redirect: fallback(stringType(), "").default("") })),
	head: () => ({ meta: [
		{ title: "Sign in — ByteSpace" },
		{
			name: "description",
			content: "Sign in to your ByteSpace account."
		},
		{
			property: "og:title",
			content: "Sign in — ByteSpace"
		},
		{
			property: "og:description",
			content: "Sign in to your ByteSpace account."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
