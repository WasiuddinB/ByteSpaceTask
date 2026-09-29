import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-2xl",
        "display-xl",
        "display-lg",
        "heading-lg",
        "heading-md",
        "heading-sm",
        "body-lg",
        "body-md",
        "body-sm",
        "body-xs",
        "label-lg",
        "label-md",
        "label-sm",
        "label-xs",
      ],
      shadow: ["card"],
      container: ["page"],
      spacing: [
        "section",
        "section-lg",
        "section-compact",
        "section-compact-lg",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
