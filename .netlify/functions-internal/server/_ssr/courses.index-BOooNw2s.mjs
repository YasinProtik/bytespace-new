import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as zodValidator, r as objectType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-BOooNw2s.js
var $$splitComponentImporter = () => import("./courses.index-DKIxt2sJ.mjs");
var searchSchema = objectType({
	q: fallback(stringType(), "").default(""),
	category: fallback(stringType(), "Featured").default("Featured"),
	level: fallback(stringType(), "").default(""),
	sort: fallback(stringType(), "Most relevant").default("Most relevant")
});
var Route = createFileRoute("/courses/")({
	validateSearch: zodValidator(searchSchema),
	head: () => ({ meta: [
		{ title: "Browse Courses — ByteSpace" },
		{
			name: "description",
			content: "Search and filter courses from ByteSpace creators."
		},
		{
			property: "og:title",
			content: "Browse Courses — ByteSpace"
		},
		{
			property: "og:description",
			content: "Search and filter courses from ByteSpace creators."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
