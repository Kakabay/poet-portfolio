import { create } from 'zustand';

interface PinState {
  pinPoems: number[];
}

export const useCommentsStore = create<PinState>((set) => ({
  pinPoems: [],
}));
