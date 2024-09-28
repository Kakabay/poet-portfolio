import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCover = (key: string) => {
  switch (key) {
    case "/poems":
      return {
        img: "/images/poems/cover.png",
        opacity: "opacity-35",
        mode: "mix-blend-normal",
      };
    case "/about":
      return {
        img: "/images/about/cover.png",
        opacity: "opacity-75",
        mode: "mix-blend-soft-light",
      };
    case "/poems":
      return {
        img: "/images/poems/cover.png",
        opacity: "opacity-35",
        mode: "mix-blend-normal",
      };
  }
};
