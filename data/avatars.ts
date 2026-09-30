import { images } from "@/lib/images";

export interface Avatar {
  src: string;
  alt: string;
}

export const cardAvatars: Avatar[] = [
  { src: images.avatars.user, alt: "Ava Chen" },
  { src: images.avatars.user, alt: "Liam Patel" },
  { src: images.avatars.user, alt: "Sofia Reyes" },
  { src: images.avatars.user, alt: "Noah Kim" },
];

export const stackAvatars: Avatar[] = [
  { src: images.avatars.user, alt: "Mia Johnson" },
  { src: images.avatars.user, alt: "Ethan Brown" },
  { src: images.avatars.user, alt: "Isla Davis" },
  { src: images.avatars.user, alt: "Lucas Miller" },
  { src: images.avatars.user, alt: "Zoe Wilson" },
  { src: images.avatars.user, alt: "Aria Moore" },
  { src: images.avatars.user, alt: "Leo Taylor" },
];
