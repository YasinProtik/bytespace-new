import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as zodValidator, r as objectType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-DFVdvRvM.js
var $$splitComponentImporter = () => import("./signup-Cxft1wMq.mjs");
var Route = createFileRoute("/signup")({
	validateSearch: zodValidator(objectType({ role: fallback(stringType(), "").default("") })),
	head: () => ({ meta: [
		{ title: "Create account — ByteSpace" },
		{
			name: "description",
			content: "Create your ByteSpace account to learn or teach."
		},
		{
			property: "og:title",
			content: "Create account — ByteSpace"
		},
		{
			property: "og:description",
			content: "Create your ByteSpace account to learn or teach."
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
