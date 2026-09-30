import figma from "@/assets/course-figma.jpg";
import digitalAsset from "@/assets/course-digital-asset.jpg";
import bigData from "@/assets/course-big-data.jpg";
import productivity from "@/assets/course-productivity.jpg";
import money from "@/assets/course-money.jpg";
import startup from "@/assets/course-startup.jpg";

export type Review = {
  name: string;
  role: string;
  avatar: string;
  when: string;
  stars: number;
  text: string;
  hidden?: boolean;
};

export type Module = { title: string; description: string };

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  creator: string;
  creatorSlug: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewCount: number;
  students: number;
  price: number;
  image: string;
  lessons: number;
  lessonsCount: string;
  duration: string;
  comments: number;
  hours: number;
  modules: Module[];
  ratingBreakdown: number[];
  reviews: Review[];
  learn: string[];
};

export const avatar = (n: number) => `https://i.pravatar.cc/80?img=${n}`;

const modules: Module[] = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const reviews: Review[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: avatar(12),
    when: "a year ago",
    stars: 5,
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: avatar(32),
    when: "a year ago",
    stars: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: avatar(52),
    when: "a year ago",
    stars: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    avatar: avatar(45),
    when: "8 months ago",
    stars: 4,
    text: "Great structure and pacing. A couple of modules could go deeper, but overall a very solid course that I would recommend to any designer.",
    hidden: true,
  },
  {
    name: "Marvin McKinney",
    role: "UI/UX Designer",
    avatar: avatar(59),
    when: "6 months ago",
    stars: 3,
    text: "Useful fundamentals, though I was hoping for more advanced platform-specific material toward the end of the course.",
    hidden: true,
  },
];

const base = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  description:
    "Immerse yourself in a practical, project-led course designed to take you from the fundamentals to confident, professional work. Every module pairs short videos with hands-on exercises.",
  creator: "purepearl studio",
  creatorSlug: "purepearl-studio",
  level: "Beginner" as const,
  rating: 4.5,
  reviewCount: 172,
  students: 199,
  price: 25,
  lessons: 17,
  lessonsCount: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: 59,
  hours: 24,
  modules,
  ratingBreakdown: [720, 120, 21, 12, 16],
  reviews,
  learn: [
    "Build a complete digital asset library from scratch",
    "Apply colour theory and typography with confidence",
    "Design for mobile, web and social platforms",
    "Present and critique creative work professionally",
  ],
};

export const courses: Course[] = [
  { ...base, id: "learn-figma-from-basic", title: "Learn Figma from Basic", category: "UI/UX Design", image: figma },
  {
    ...base,
    id: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Graphic Design",
    level: "Intermediate",
    rating: 4.8,
    image: digitalAsset,
  },
  { ...base, id: "the-power-of-big-data", title: "the Power of Big Data", category: "Data Science", image: bigData },
  {
    ...base,
    id: "balancing-productivity",
    title: "Balancing Productivity and Wellbeing",
    category: "Productivity",
    image: productivity,
  },
  {
    ...base,
    id: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Business",
    image: money,
  },
  {
    ...base,
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    image: startup,
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);

/** Repeats the 6 base courses in order so grids can show any number of cards. */
export const repeatCourses = (count: number) =>
  Array.from({ length: count }, (_, i) => ({ ...courses[i % courses.length], key: `${i}` }));

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const coursesPageCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const lessonList = [
  { n: "01", title: "Introduction to Digital Assets", mins: "12 mins" },
  { n: "02", title: "Design Principles for Impacts", mins: "21 mins" },
  { n: "03", title: "Advanced Techniques in Digital Creation", mins: "16 mins" },
];
