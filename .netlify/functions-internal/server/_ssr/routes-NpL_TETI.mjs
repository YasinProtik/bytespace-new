import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as course_figma_default, n as categories, o as courses } from "./courses-EvJM9Vz5.mjs";
import { r as Shape } from "./brand-B03-_1xZ.mjs";
import { _ as Camera, d as CodeXml, l as Megaphone, n as Star, o as Search, p as CircleCheck, s as Palette, u as Laptop, v as Briefcase } from "../_libs/lucide-react.mjs";
import { a as Footer, o as Navbar } from "./Navbar-DKzUKqjX.mjs";
import { t as CategoryPills } from "./CategoryPills-MRMn-BUH.mjs";
import { t as AvatarStack } from "./AvatarStack-CHfOREiP.mjs";
import { t as CourseCard } from "./CourseCard-Bh1POXKg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NpL_TETI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var creator_woman_default = "/assets/creator-woman-BFOve1up.png";
var hero_student_default = "/assets/hero-student-D2TL3LXq.png";
var paths = [
	{
		icon: Palette,
		label: "Design"
	},
	{
		icon: CodeXml,
		label: "Development"
	},
	{
		icon: Laptop,
		label: "IT & Software"
	},
	{
		icon: Briefcase,
		label: "Business"
	},
	{
		icon: Megaphone,
		label: "Marketing"
	},
	{
		icon: Camera,
		label: "Photography"
	}
];
var testimonials = [
	{
		name: "Sarah M.",
		role: "Enthusiastic Learner",
		img: "https://i.pravatar.cc/120?img=5",
		quote: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators has exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\""
	},
	{
		name: "James L.",
		role: "Lifelong Learner",
		img: "https://i.pravatar.cc/120?img=13",
		quote: "\"I've tried several online learning platforms, but ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\""
	},
	{
		name: "Alex B.",
		role: "Inspired Creator",
		img: "https://i.pravatar.cc/120?img=68",
		quote: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\""
	}
];
function Landing() {
	const navigate = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("Featured");
	const visible = category === "Featured" ? courses : courses.filter((c) => c.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid overflow-hidden pb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bs-container pt-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl",
									children: "Get Access to Hundreds Courses Available"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-xl text-sm text-white/85",
									children: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "mx-auto mt-8 flex max-w-xl items-center gap-3",
									onSubmit: (e) => {
										e.preventDefault();
										navigate({
											to: "/courses",
											search: { q: query }
										});
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-11 w-full items-center gap-2 rounded-full bg-white px-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (e) => setQuery(e.target.value),
											placeholder: "Course, topic, creator",
											className: "h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "h-11 shrink-0 rounded-full bg-lime px-7 text-sm font-medium text-ink transition-colors hover:bg-lime-dark",
										children: "Search"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto mt-10 h-[340px] max-w-4xl sm:h-[420px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 h-[300px] w-[560px] -translate-x-1/2 rounded-t-full bg-lime sm:h-[380px] sm:w-[680px]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_student_default,
									alt: "Student with headphones holding a laptop",
									width: 912,
									height: 1104,
									className: "absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-2 top-16 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-ink",
										children: "UI/UX Design"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground",
										children: "240 Courses • 1000+ Students"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-2 top-16 hidden w-44 rounded-xl bg-white px-4 py-3 shadow-lg sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-ink",
										children: "Learning Progress"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-2 w-full rounded-full bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-[55%] rounded-full bg-lime" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-10 left-0 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-ink",
											children: "Happy Students"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1 text-[10px] text-muted-foreground",
											children: ["4.5 (240) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-lime text-lime" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
											className: "mt-2",
											count: 5,
											label: "2K+",
											size: 24,
											start: 4
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
									kind: "squiggle",
									className: "-left-10 top-0 h-32 w-32"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
									kind: "torus",
									color: "white",
									className: "bottom-16 left-0 h-28 w-28"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
									kind: "squiggle",
									color: "white",
									className: "right-0 top-24 h-28 w-28"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
									kind: "cone",
									color: "white",
									className: "-right-6 top-0 h-24 w-24"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-surface py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bs-container flex flex-wrap items-center justify-between gap-6 opacity-50",
					children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-6 w-6 rounded-full border-2 border-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold",
							children: "Logoipsum"
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bs-container text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto max-w-xl font-display text-3xl font-semibold text-ink",
							children: "Discover Your Passion, Build Your Skills"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-muted-foreground",
							children: "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPills, {
							className: "mt-8",
							items: categories,
							active: category,
							onSelect: setCategory,
							showMore: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3",
							children: (visible.length ? visible : courses).map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, {
								course,
								className: "fade-up"
							}, course.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bs-container text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold text-ink sm:text-3xl",
							children: "Explore Diverse Learning Paths at Bytespace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-muted-foreground",
							children: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-3 gap-4 lg:grid-cols-6",
							children: paths.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card px-4 py-6 transition-shadow hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-auto grid h-10 w-10 place-items-center rounded-full bg-lime",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-ink" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs text-ink",
									children: label
								})]
							}, label))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bs-soft py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bs-container grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-md font-display text-3xl font-semibold text-ink",
							children: "Your Path to Professional Growth Starts Here!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm text-muted-foreground",
							children: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex gap-12",
							children: [
								["12K", "Students"],
								["70+", "Courses"],
								["16", "Creators"]
							].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold text-primary",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: label
							})] }, label))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-0 w-64 rounded-2xl bg-white p-3 shadow-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: course_figma_default,
										alt: "",
										loading: "lazy",
										className: "h-28 w-full rounded-xl object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-sm font-semibold text-ink",
										children: "Learn Figma fro..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "purepearl studio"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display font-semibold text-primary",
											children: "$25"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "/lifetime"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_student_default,
								alt: "Smiling learner with headphones",
								loading: "lazy",
								width: 912,
								height: 1104,
								className: "absolute bottom-0 left-16 h-[360px] w-auto object-contain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 top-32 w-44 rounded-xl bg-white px-4 py-3 shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Learning Progress"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-semibold text-ink",
										children: "55%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 w-full rounded-full bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-[55%] rounded-full bg-lime" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
								kind: "squiggle",
								className: "right-6 top-4 h-24 w-24"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bs-soft pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bs-container grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: creator_woman_default,
								alt: "Creator with headphones",
								loading: "lazy",
								width: 912,
								height: 1104,
								className: "absolute bottom-0 left-10 h-[400px] w-auto object-contain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-4 w-44 rounded-xl bg-primary px-4 py-3 text-white shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px]",
										children: "Total Revenue"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/70",
										children: "July 1-28"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-semibold",
										children: "$120.29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 w-full rounded-full bg-white/25",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-2/3 rounded-full bg-lime" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 top-40 w-40 rounded-xl bg-primary px-4 py-3 text-white shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px]",
										children: "Year to Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/70",
										children: "2023"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg font-semibold",
										children: "$1,200.38"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] text-ink",
										children: "+12$"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-16 right-0 w-56 rounded-xl bg-white px-4 py-3 shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-ink",
										children: "Happy Students"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1 text-[10px] text-muted-foreground",
										children: ["4.5 (240) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-lime text-lime" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
										className: "mt-2",
										count: 6,
										label: "2K+",
										size: 24,
										start: 6
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
								kind: "squiggle",
								className: "bottom-24 left-40 h-24 w-24"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-sm font-display text-3xl font-semibold text-ink",
							children: "Create & Manage Courses Easily."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-md text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-ink",
								children: "ByteSpace"
							}), " supports individuals or entities in the creation, publication, and administration of educational courses."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: [
								"Share Your Expertise",
								"Monetize Your Passion",
								"Flexibility and Autonomy",
								"Build a Community"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 fill-primary text-white" }), item]
							}, item))
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-grid relative overflow-hidden border-y-2 border-[#F04E23] py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bs-grid-lines" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bs-container relative text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto max-w-lg font-display text-3xl font-semibold text-white",
								children: "Unlock Your Potential as a Creator with ByteSpace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-sm text-white/85",
								children: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators, Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								search: { role: "creator" },
								className: "mt-8 inline-block rounded-full bg-lime px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-lime-dark",
								children: "Join as Creator"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "squiggle",
						className: "-left-8 top-2 h-40 w-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "squiggle",
						color: "white",
						className: "left-24 top-2 h-28 w-28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "cone",
						color: "white",
						className: "-left-6 bottom-6 h-28 w-28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "torus",
						className: "-bottom-10 left-8 h-36 w-36"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "pyramid",
						className: "right-28 top-4 h-32 w-32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "cone",
						color: "white",
						className: "-right-4 top-16 h-36 w-36"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shape, {
						kind: "squiggle",
						className: "-bottom-4 right-8 h-36 w-36"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bs-glow-right py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bs-container grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-sm font-display text-3xl font-semibold text-ink",
						children: "Discover What Our Community Is Saying"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bs-container mt-12 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.img,
								alt: "",
								loading: "lazy",
								className: "h-12 w-12 rounded-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-display text-sm font-semibold text-ink",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-primary",
								children: t.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: t.quote
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Landing as component };
