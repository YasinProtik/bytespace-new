import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getCourse } from "./courses-EvJM9Vz5.mjs";
import { i as stringType, n as zodValidator, r as objectType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._id-Dg3IPNor.js
var $$splitComponentImporter = () => import("./courses._id-5Fsjj5fc.mjs");
var $$splitErrorComponentImporter = () => import("./courses._id-CiIG30nt.mjs");
var $$splitNotFoundComponentImporter = () => import("./courses._id-B6dKEoCT.mjs");
var Route = createFileRoute("/courses/$id")({
	validateSearch: zodValidator(objectType({ tab: fallback(stringType(), "details").default("details") })),
	loader: ({ params }) => {
		const course = getCourse(params.id);
		if (!course) throw notFound();
		return { course };
	},
	head: ({ loaderData }) => {
		const t = loaderData ? `${loaderData.course.title} — ByteSpace` : "Course not found — ByteSpace";
		const d = loaderData?.course.subtitle ?? "This course could not be found.";
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
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
