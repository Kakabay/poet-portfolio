import { create } from 'zustand';

interface SortItem {
  id: string;
  view: string;
}

interface Store {
  activeSort: SortItem;
  setSort: (value: SortItem) => void;
}

export const useSortStore = create<Store>((set) => ({
  activeSort: {
    id: 'news',
    view: 'Snaçala nowye',
  },
  setSort: (value) => set((state) => ({ activeSort: (state.activeSort = value) })),
}));
