import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCover = (key: string) => {
  switch (key) {
    case "/poems":
      return { img: "/images/poems/cover.png", opacity: "opacity-35" };
    case "/poems":
      return { img: "/images/poems/cover.png", opacity: "opacity-35" };
    case "/poems":
      return { img: "/images/poems/cover.png", opacity: "opacity-35" };
  }
};
