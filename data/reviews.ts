import { images } from "@/lib/images";
export interface ReviewCard {
  name: string;
  role: string;
  time: string;
  text: string;
  avatar: string;
}

export const reviewsContent = {
  heading: "What Learners Are Saying",
  body: `Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.`,
  summary: {
    label: "Ratings",
    average: "4.7",
    bars: [
      { stars: 5, count: "720", width: 260 },
      { stars: 4, count: "120", width: 103 },
      { stars: 3, count: "21", width: 27 },
      { stars: 2, count: "12", width: 10 },
      { stars: 1, count: "16", width: 15 },
    ],
    barWidth: 282,
  },
  listHeading: "Individual Reviews:",
  filters: ["5", "4", "3", "2", "1"],
  cards: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      text: `"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"`,
      avatar: images.avatars.reviewer1,
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      text: `This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!`,
      avatar: images.avatars.reviewer2,
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      text: `The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.`,
      avatar: images.avatars.user,
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      text: `The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.`,
      avatar: images.avatars.user,
    },
  ] satisfies ReviewCard[],
};
