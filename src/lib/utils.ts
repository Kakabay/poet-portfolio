import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';

export const scrollTop = (value?: any) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [value]);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCover = (key: string) => {
  switch (key) {
    case '/poems':
      return {
        img: '/images/poems/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    case '/about':
      return {
        img: '/images/about/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: '!opacity-75',
      };
    // case "/poems/1":
    //   return {
    //     img: "/images/poems/poem-cover.png",
    //     mode: "mix-blend-soft-light",
    //     opacity: "opacity-35",
    //   };
    case '/comments':
      return {
        img: '/images/comments/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: '!opacity-100',
      };
    case '/moments':
      return {
        img: '/images/faq/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    // case "/moments/1":
    //   return {
    //     img: "/images/faq/cover.png",
    //     mode: "mix-blend-soft-light",
    //     opacity: "opacity-35",
    //   };
    case '/contacts':
      return {
        img: '/images/faq/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    case '/instruction':
      return {
        img: '/images/faq/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    case '/books':
      return {
        img: '/images/books/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    case '/messages':
      return {
        img: '/images/messages/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
    case '/cabinet':
      return {
        img: '/images/faq/cover.png',
        mode: 'mix-blend-soft-light',
        opacity: 'opacity-35',
      };
  }
};
