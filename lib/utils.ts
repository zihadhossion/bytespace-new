import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: ["card"] }],
      "font-size": [
        {
          text: [
            "display",
            "title",
            "heading",
            "subheading",
            "label-l",
            "label-m",
            "label-s",
            "label-xs",
          ],
        },
      ],
      "text-color": [
        {
          text: [
            "ink",
            "muted",
            "surface",
            "soft",
            "accent",
            "price",
            "error-600",
            (classPart: string) => /^(steel|brand|volt)-\d+$/.test(classPart),
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export const container =
  "mx-auto w-full max-w-page px-5 sm:px-6 md:px-0";

export const inputBase =
  "text-lg text-steel-950 placeholder:text-steel-400 focus:outline-none";
