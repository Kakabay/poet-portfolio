import { create } from 'zustand';

interface Props {
  active: boolean;
  mobActive: boolean;

  success: boolean;
  setSuccess: (val: boolean) => void;

  setActive: (val: boolean) => void;
  setMobActive: (val: boolean) => void;
}

export const useLoginStore = create<Props>((set) => ({
  active: false,
  mobActive: false,

  success: false,
  setSuccess: (val) => set(() => ({ success: val })),

  setActive: (val) => set(() => ({ active: val })),
  setMobActive: (val) => set(() => ({ mobActive: val })),
}));
