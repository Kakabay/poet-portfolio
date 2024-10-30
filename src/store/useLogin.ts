import { create } from 'zustand';

interface Props {
  active: boolean;
  mobActive: boolean;
  setActive: (val: boolean) => void;
  setMobActive: (val: boolean) => void;
}

export const useLoginStore = create<Props>((set) => ({
  active: false,
  mobActive: false,
  setActive: (val) => set(() => ({ active: val })),
  setMobActive: (val) => set(() => ({ mobActive: val })),
}));
