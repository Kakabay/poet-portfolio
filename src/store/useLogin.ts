import { create } from "zustand";

interface Props {
  active: boolean;
  setActive: (val: boolean) => void;
}

export const useLoginStore = create<Props>((set) => ({
  active: false,
  setActive: (val) => set((state) => ({ active: (state.active = val) })),
}));
