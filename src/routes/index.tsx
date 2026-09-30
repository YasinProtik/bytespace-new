import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Briefcase, Camera, CheckCircle2, Code2, Laptop, Megaphone, Palette, Search, Star,
} from "lucide-react";
import { useState } from "react";

import { AvatarStack } from "@/components/AvatarStack";
import { CategoryPills } from "@/components/CategoryPills";
import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Shape } from "@/components/brand";
import femaleLearner from "@/assets/creator-woman.png";
import figma from "@/assets/course-figma.jpg";
import maleLearner from "@/assets/hero-student.png";
import { categories, courses } from "@/data/courses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ByteSpace — Get Access to Hundreds Courses Available" },
      {
        name: "description",
        content:
          "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
      },
      { property: "og:title", content: "ByteSpace — Online course marketplace" },
      {
        property: "og:description",
        content: "Hundreds of courses from creators around the world. Learn design, data, business and more.",
      },
    ],
  }),
  component: Landing,
});

const paths = [
  { icon: Palette, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: Laptop, label: "IT & Software" },
  { icon: Briefcase, label: "Business" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Camera, label: "Photography" },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: "https://i.pravatar.cc/120?img=5",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators has exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: "https://i.pravatar.cc/120?img=13",
    quote:
      "\"I've tried several online learning platforms, but ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    img: "https://i.pravatar.cc/120?img=68",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

function Landing() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Featured");

  const visible =
    category === "Featured" ? courses : courses.filter((c) => c.category === category);

  return (
    <div className="min-h-screen bg-background">
      {/* 1 — HERO */}
      <section className="bs-grid overflow-hidden pb-0">
        <div className="bs-grid-lines" />
        <div className="relative">
          <Navbar />
          <div className="bs-container pt-10 text-center">
            <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/85">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-xl items-center gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/courses", search: { q: query } });
              }}
            >
              <div className="flex h-11 w-full items-center gap-2 rounded-full bg-white px-5">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Course, topic, creator"
                  className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-lime px-7 text-sm font-medium text-ink transition-colors hover:bg-lime-dark"
              >
                Search
              </button>
            </form>
          </div>

          {/* dome + photo + floating cards */}
          <div className="relative mx-auto mt-10 h-[340px] max-w-4xl sm:h-[420px]">
            <div className="absolute bottom-0 left-1/2 h-[300px] w-[560px] -translate-x-1/2 rounded-t-full bg-lime sm:h-[380px] sm:w-[680px]" />
            <img
              src={maleLearner}
              alt="Student with headphones holding a laptop"
              width={912}
              height={1104}
              className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
            />

            <div className="absolute left-2 top-16 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-semibold text-ink">UI/UX Design</p>
              <p className="text-[10px] text-muted-foreground">240 Courses • 1000+ Students</p>
            </div>

            <div className="absolute right-2 top-16 hidden w-44 rounded-xl bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs text-ink">Learning Progress</p>
              <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                <div className="h-2 w-[55%] rounded-full bg-lime" />
              </div>
            </div>

            <div className="absolute bottom-10 left-0 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-semibold text-ink">Happy Students</p>
              <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                4.5 (240) <Star className="h-3 w-3 fill-lime text-lime" />
              </p>
              <AvatarStack className="mt-2" count={5} label="2K+" size={24} start={4} />
            </div>

            <Shape kind="squiggle" className="-left-10 top-0 h-32 w-32" />
            <Shape kind="torus" color="white" className="bottom-16 left-0 h-28 w-28" />
            <Shape kind="squiggle" color="white" className="right-0 top-24 h-28 w-28" />
            <Shape kind="cone" color="white" className="-right-6 top-0 h-24 w-24" />
          </div>
        </div>
      </section>

      {/* 2 — LOGO STRIP */}
      <section className="bg-surface py-8">
        <div className="bs-container flex flex-wrap items-center justify-between gap-6 opacity-50">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 text-ink">
              <span className="h-6 w-6 rounded-full border-2 border-ink" />
              <span className="font-display text-sm font-semibold">Logoipsum</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3 + 4 — DISCOVER + GRID */}
      <section className="py-20">
        <div className="bs-container text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold text-ink">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
          <CategoryPills
            className="mt-8"
            items={categories}
            active={category}
            onSelect={setCategory}
            showMore
          />

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {(visible.length ? visible : courses).map((course) => (
              <CourseCard key={course.id} course={course} className="fade-up" />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — LEARNING PATHS */}
      <section className="pb-20">
        <div className="bs-container text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 lg:grid-cols-6">
            {paths.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card px-4 py-6 transition-shadow hover:shadow-md"
              >
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-lime">
                  <Icon className="h-5 w-5 text-ink" />
                </span>
                <p className="mt-4 text-xs text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PROFESSIONAL GROWTH */}
      <section className="bs-soft py-20">
        <div className="bs-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold text-ink">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <div className="mt-8 flex gap-12">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Creators"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-semibold text-primary">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px]">
            <div className="absolute left-0 top-0 w-64 rounded-2xl bg-white p-3 shadow-xl">
              <img src={figma} alt="" loading="lazy" className="h-28 w-full rounded-xl object-cover" />
              <h3 className="mt-3 font-display text-sm font-semibold text-ink">Learn Figma fro...</h3>
              <p className="text-xs text-muted-foreground">
                by <span className="text-primary">purepearl studio</span>
              </p>
              <p className="mt-3 text-sm">
                <span className="font-display font-semibold text-primary">$25</span>
                <span className="text-xs text-muted-foreground">/lifetime</span>
              </p>
            </div>
            <img
              src={maleLearner}
              alt="Smiling learner with headphones"
              loading="lazy"
              width={912}
              height={1104}
              className="absolute bottom-0 left-16 h-[360px] w-auto object-contain"
            />
            <div className="absolute right-0 top-32 w-44 rounded-xl bg-white px-4 py-3 shadow-lg">
              <p className="text-[11px] text-muted-foreground">Learning Progress</p>
              <p className="font-display text-2xl font-semibold text-ink">55%</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
                <div className="h-1.5 w-[55%] rounded-full bg-lime" />
              </div>
            </div>
            <Shape kind="squiggle" className="right-6 top-4 h-24 w-24" />
          </div>
        </div>
      </section>

      {/* 7 — CREATE & MANAGE */}
      <section className="bs-soft pb-24">
        <div className="bs-container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[420px]">
            <img
              src={femaleLearner}
              alt="Creator with headphones"
              loading="lazy"
              width={912}
              height={1104}
              className="absolute bottom-0 left-10 h-[400px] w-auto object-contain"
            />
            <div className="absolute left-0 top-4 w-44 rounded-xl bg-primary px-4 py-3 text-white shadow-lg">
              <p className="text-[11px]">Total Revenue</p>
              <p className="text-[10px] text-white/70">July 1-28</p>
              <p className="font-display text-lg font-semibold">$120.29</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/25">
                <div className="h-1.5 w-2/3 rounded-full bg-lime" />
              </div>
            </div>
            <div className="absolute left-0 top-40 w-40 rounded-xl bg-primary px-4 py-3 text-white shadow-lg">
              <p className="text-[11px]">Year to Date</p>
              <p className="text-[10px] text-white/70">2023</p>
              <p className="font-display text-lg font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] text-ink">
                +12$
              </span>
            </div>
            <div className="absolute bottom-16 right-0 w-56 rounded-xl bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold text-ink">Happy Students</p>
              <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
                4.5 (240) <Star className="h-3 w-3 fill-lime text-lime" />
              </p>
              <AvatarStack className="mt-2" count={6} label="2K+" size={24} start={6} />
            </div>
            <Shape kind="squiggle" className="bottom-24 left-40 h-24 w-24" />
          </div>

          <div>
            <h2 className="max-w-sm font-display text-3xl font-semibold text-ink">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              <span className="font-semibold text-ink">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink">
                  <CheckCircle2 className="h-5 w-5 fill-primary text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 — CREATOR CTA */}
      <section className="bs-grid relative overflow-hidden border-y-2 border-[#F04E23] py-20">
        <div className="bs-grid-lines" />
        <div className="bs-container relative text-center">
          <h2 className="mx-auto max-w-lg font-display text-3xl font-semibold text-white">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/85">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000 local and
            international creators, Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link
            to="/signup"
            search={{ role: "creator" }}
            className="mt-8 inline-block rounded-full bg-lime px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-lime-dark"
          >
            Join as Creator
          </Link>
        </div>
        <Shape kind="squiggle" className="-left-8 top-2 h-40 w-40" />
        <Shape kind="squiggle" color="white" className="left-24 top-2 h-28 w-28" />
        <Shape kind="cone" color="white" className="-left-6 bottom-6 h-28 w-28" />
        <Shape kind="torus" className="-bottom-10 left-8 h-36 w-36" />
        <Shape kind="pyramid" className="right-28 top-4 h-32 w-32" />
        <Shape kind="cone" color="white" className="-right-4 top-16 h-36 w-36" />
        <Shape kind="squiggle" className="-bottom-4 right-8 h-36 w-36" />
      </section>

      {/* 9 — TESTIMONIALS */}
      <section className="bs-glow-right py-20">
        <div className="bs-container grid gap-10 lg:grid-cols-2">
          <h2 className="max-w-sm font-display text-3xl font-semibold text-ink">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm text-muted-foreground">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="bs-container mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <img src={t.img} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <p className="mt-5 font-display text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-primary">{t.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{t.quote}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
