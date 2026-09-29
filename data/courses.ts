export interface Course {
  id: string;
  title: string;
  author: string;
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
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/learn-figma-from-basic.jpg",
    students: 26,
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/build-digital-asset.jpg",
    students: 26,
  },
  {
    id: "power-of-big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/power-of-big-data.jpg",
    students: 26,
  },
  {
    id: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/balancing-productivity.jpg",
    students: 26,
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/mastering-money-management.jpg",
    students: 26,
  },
  {
    id: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image: "/images/courses/from-idea-to-startup-success.jpg",
    students: 26,
  },
];
