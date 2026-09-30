import { images } from "@/lib/images";
export interface CreatorStat {
  value: string;
  label: string;
}

export interface Creator {
  slug: string;
  name: string;
  badge: string;
  role: string;
  category: string;
  avatar: string;
  bio: string;
  followers: number;
  courseIds: string[];
  stats: CreatorStat[];
  followLabel: string;
}

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    badge: "Creator",
    role: "Passionate UI/UX, Web designer",
    category: "Design",
    avatar: images.avatars.creator,
    bio: `Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.`,
    followers: 12,
    courseIds: [
      "learn-figma-from-basic",
      "build-digital-asset",
      "power-of-big-data",
      "balancing-productivity-and-self-care",
      "mastering-money-management",
      "from-idea-to-startup-success",
    ],
    stats: [
      { value: "3", label: "Products" },
      { value: "12", label: "Followers" },
    ],
    followLabel: "Follow",
  },
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    badge: "Creator",
    role: "UI Designer & Illustration Lover",
    category: "Design",
    avatar: images.avatars.user,
    bio: `Hi, I'm Sarah — a product designer who loves turning complex problems into simple, joyful interfaces. Over the last decade I've shipped design systems for startups and taught thousands of students to do the same.
On ByteSpace I share the exact workflows I use every day, from first sketch to production-ready components.`,
    followers: 148,
    courseIds: ["design-systems-in-figma", "color-theory-for-designers"],
    stats: [
      { value: "2", label: "Courses" },
      { value: "148", label: "Followers" },
    ],
    followLabel: "Follow",
  },
  {
    slug: "james-lee",
    name: "James Lee",
    badge: "Creator",
    role: "Motion Graphics Artist",
    category: "Animation",
    avatar: images.avatars.user,
    bio: `I'm James, a motion designer bringing static ideas to life through animation. I've crafted title sequences, product explainers, and social campaigns for brands around the world.
Join me as we break down the principles behind movement, timing, and feel.`,
    followers: 96,
    courseIds: ["motion-design-fundamentals"],
    stats: [
      { value: "1", label: "Course" },
      { value: "96", label: "Followers" },
    ],
    followLabel: "Follow",
  },
  {
    slug: "alex-brown",
    name: "Alex Brown",
    badge: "Creator",
    role: "Product Photographer",
    category: "Photography",
    avatar: images.avatars.user,
    bio: `Alex here — I shoot products that sell. From lighting setups to post-processing, I document everything I know about making a photograph feel effortless.
New courses are on the way; follow along to get notified first.`,
    followers: 64,
    courseIds: [],
    stats: [
      { value: "0", label: "Courses" },
      { value: "64", label: "Followers" },
    ],
    followLabel: "Follow",
  },
  {
    slug: "brooklyn-simmons",
    name: "Brooklyn Simmons",
    badge: "Creator",
    role: "Frontend Developer & Educator",
    category: "Development",
    avatar: images.avatars.user,
    bio: `I'm Brooklyn, a frontend engineer who believes anyone can learn to build for the web. I teach modern React through practical, portfolio-ready projects.
Expect clear explanations, real code, and no fluff.`,
    followers: 210,
    courseIds: ["react-for-designers"],
    stats: [
      { value: "1", label: "Course" },
      { value: "210", label: "Followers" },
    ],
    followLabel: "Follow",
  },
  {
    slug: "cody-fisher",
    name: "Cody Fisher",
    badge: "Creator",
    role: "Digital Marketer & Strategist",
    category: "Marketing",
    avatar: images.avatars.user,
    bio: `Cody here — I help creators grow audiences that actually convert. SEO, email, paid social: I share the strategies behind the campaigns I run.
I'm filming my first ByteSpace course right now.`,
    followers: 87,
    courseIds: [],
    stats: [
      { value: "0", label: "Courses" },
      { value: "87", label: "Followers" },
    ],
    followLabel: "Follow",
  },
];

export function getCreator(slug: string): Creator | undefined {
  return creators.find((creator) => creator.slug === slug);
}

export const creatorToolbar = {
  filters: [
    { icon: images.icons.filter, label: "Filter" },
    { icon: images.icons.levelBlue, label: "Level" },
    { icon: images.icons.category, label: "Category" },
  ],
  sort: { icon: images.icons.sort, label: "Most relevant" },
};
