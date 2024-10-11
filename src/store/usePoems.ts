import { create } from 'zustand';

interface ActiveSort {
  id: string;
  view: string;
}

interface Props {
  activeSort: ActiveSort;
  setActiveSort: (value: ActiveSort) => void;

  favorites: number[];
  setFavorites: (num: number) => void;
}

export const usePoemsStore = create<Props>((set) => ({
  activeSort: {
    id: 'new',
    view: 'Snaçala nowye',
  },

  favorites: [],

  setActiveSort: (value) => set((state) => ({ activeSort: (state.activeSort = value) })),

  setFavorites: (num) => {
    set((state) => ({ favorites: [...state.favorites, num] }));
  },
}));
