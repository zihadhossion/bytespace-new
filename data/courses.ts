import { images } from "@/lib/images";
export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  category: string;
  level: string;
  price: string;
  rating: string;
  lessons: string;
  duration: string;
  comments: string;
  image: string;
  students: number;
}

export const courses: Course[] = [
  {
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Go from zero to confident in Figma, one practical screen at a time",
    author: "purepearl studio",
    category: "UI/UX Design",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.learnFigmaFromBasic,
    students: 26,
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    author: "purepearl studio",
    category: "Drawing & Painting",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.buildDigitalAsset,
    students: 26,
  },
  {
    id: "power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Turn raw data into decisions with modern analytics fundamentals",
    author: "purepearl studio",
    category: "Data Science",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.powerOfBigData,
    students: 26,
  },
  {
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    subtitle: "Build habits that keep you productive without burning out",
    author: "purepearl studio",
    category: "Productivity",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.balancingProductivity,
    students: 26,
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management",
    subtitle: "Take control of your finances and grow your income with confidence",
    author: "purepearl studio",
    category: "Freelance & Entrepreneurship",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.masteringMoneyManagement,
    students: 26,
  },
  {
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    subtitle: "Validate, launch, and scale a startup from a single idea",
    author: "purepearl studio",
    category: "Freelance & Entrepreneurship",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: images.courses.fromIdeaToStartupSuccess,
    students: 26,
  },
];

export const additionalCourses: Course[] = [
  {
    id: "design-systems-in-figma",
    title: "Design Systems in Figma",
    subtitle: "Build scalable, consistent design systems with components and tokens",
    author: "sarah mitchell",
    category: "UI/UX Design",
    level: "Intermediate",
    price: "$35",
    rating: "4.8",
    lessons: "24 Lessons",
    duration: "4 hours 10 mins",
    comments: "86 Comments",
    image: images.courses.learnFigmaFromBasic,
    students: 142,
  },
  {
    id: "color-theory-for-designers",
    title: "Color Theory for Designers",
    subtitle: "Use color with intention to create work that feels balanced and alive",
    author: "sarah mitchell",
    category: "Graphic Design",
    level: "Beginner",
    price: "$19",
    rating: "4.7",
    lessons: "12 Lessons",
    duration: "1 hour 45 mins",
    comments: "41 Comments",
    image: images.courses.balancingProductivity,
    students: 98,
  },
  {
    id: "motion-design-fundamentals",
    title: "Motion Design Fundamentals",
    subtitle: "Bring static designs to life with the principles of motion and timing",
    author: "james lee",
    category: "Animation",
    level: "Beginner",
    price: "$29",
    rating: "4.6",
    lessons: "20 Lessons",
    duration: "3 hours 5 mins",
    comments: "63 Comments",
    image: images.courses.fromIdeaToStartupSuccess,
    students: 75,
  },
  {
    id: "react-for-designers",
    title: "React for Designers",
    subtitle: "Design and build real interfaces in React without becoming a developer",
    author: "brooklyn simmons",
    category: "Web Development",
    level: "Intermediate",
    price: "$39",
    rating: "4.9",
    lessons: "28 Lessons",
    duration: "5 hours 30 mins",
    comments: "112 Comments",
    image: images.courses.buildDigitalAsset,
    students: 210,
  },
];

export const allCourses: Course[] = [...courses, ...additionalCourses];

export function getCourseById(id: string): Course | undefined {
  return allCourses.find((course) => course.id === id);
}
