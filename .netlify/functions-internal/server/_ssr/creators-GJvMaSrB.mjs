import { t as avatar } from "./courses-EvJM9Vz5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators-GJvMaSrB.js
var creators = [
	{
		id: "1",
		name: "PurePearl Studio",
		slug: "purepearl-studio",
		role: "Passionate UI/UX, Web designer",
		bio: ["Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!", "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me."],
		avatar: avatar(12),
		products: 3,
		followers: 12
	},
	{
		id: "2",
		name: "Nova Labs",
		slug: "nova-labs",
		role: "Data & analytics educators",
		bio: ["Welcome to the creative world of Nova Labs. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!", "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me."],
		avatar: avatar(33),
		products: 3,
		followers: 12
	},
	{
		id: "3",
		name: "Studio Mint",
		slug: "studio-mint",
		role: "Brand and motion designer",
		bio: ["Welcome to the creative world of Studio Mint. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!", "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me."],
		avatar: avatar(47),
		products: 3,
		followers: 12
	}
];
var getCreator = (slug) => creators.find((c) => c.slug === slug);
//#endregion
export { getCreator as n, creators as t };
