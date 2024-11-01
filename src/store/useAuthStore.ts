import { create } from 'zustand';

interface AuthState {
  name: string | null;
  accessToken: string | null;

  registerSuccess: boolean;
  setRegisterSuccess: (val: boolean) => void;

  setAuthData: (name: string | null, accessToken: string | null) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: localStorage.getItem('name') || null,
  accessToken: localStorage.getItem('accessToken') || null,

  registerSuccess: false,
  setRegisterSuccess: (val) => set({ registerSuccess: val }),

  setAuthData: (name, accessToken) => {
    name ? localStorage.setItem('name', name) : localStorage.removeItem('name');
    accessToken
      ? localStorage.setItem('accessToken', accessToken)
      : localStorage.removeItem('accessToken');
    set({ name, accessToken });
  },

  clearAuthData: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('name');
    set({ name: null, accessToken: null });
  },
}));
