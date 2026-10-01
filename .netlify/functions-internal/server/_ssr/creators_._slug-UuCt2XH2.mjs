import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCreator } from "./creators-GJvMaSrB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators_._slug-UuCt2XH2.js
var $$splitComponentImporter = () => import("./creators_._slug-Nu9dHZqc.mjs");
var $$splitErrorComponentImporter = () => import("./creators_._slug-CB0vqgQm.mjs");
var $$splitNotFoundComponentImporter = () => import("./creators_._slug-BoIYD7XS.mjs");
var Route = createFileRoute("/creators_/$slug")({
	loader: ({ params }) => {
		const creator = getCreator(params.slug);
		if (!creator) throw notFound();
		return { creator };
	},
	head: ({ loaderData }) => {
		const t = loaderData ? `${loaderData.creator.name} — ByteSpace` : "Creator not found — ByteSpace";
		const d = loaderData?.creator.role ?? "This creator could not be found.";
		return { meta: [
			{ title: t },
			{
				name: "description",
				content: d
			},
			{
				property: "og:title",
				content: t
			},
			{
				property: "og:description",
				content: d
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
