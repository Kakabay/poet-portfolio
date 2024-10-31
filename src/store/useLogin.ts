import { create } from 'zustand';

interface Props {
  active: boolean;
  mobActive: boolean;

  loginError: string;
  setLoginError: (er: string) => void;

  success: boolean;
  setSuccess: (val: boolean) => void;

  setActive: (val: boolean) => void;
  setMobActive: (val: boolean) => void;
}

export const useLoginStore = create<Props>((set) => ({
  active: false,
  mobActive: false,

  loginError: '',
  setLoginError: (er) => set({ loginError: er }),

  success: false,
  setSuccess: (val) => set(() => ({ success: val })),

  setActive: (val) => set(() => ({ active: val })),
  setMobActive: (val) => set(() => ({ mobActive: val })),
}));
