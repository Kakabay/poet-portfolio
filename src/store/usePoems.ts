import { PoemType } from "@/components/shared/poems-item";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ActiveSort {
  id: string;
  view: string;
}

interface Props {
  activeSort: ActiveSort;
  setActiveSort: (value: ActiveSort) => void;

  favorites: PoemType[];
  setFavorites: (obj: PoemType) => void;
}

export const usePoemsStore = create<Props>()(
  persist(
    (set) => ({
      activeSort: {
        id: "new",
        view: "Snaçala nowye",
      },

      favorites: [],

      setActiveSort: (value) => set((state) => ({ activeSort: value })), // Убираем лишнее присваивание

      setFavorites: (obj) => {
        set((state) => {
          // Проверяем, есть ли элемент в массиве
          const isFavorite = state.favorites.some((item) => item.id === obj.id);

          // Если элемент есть, убираем его, если нет — добавляем
          return {
            favorites: isFavorite
              ? state.favorites.filter((favorite) => favorite.id !== obj.id)
              : [...state.favorites, obj],
          };
        });
      },
    }),
    {
      name: "poems-store", // имя ключа в localStorage
    }
  )
);
