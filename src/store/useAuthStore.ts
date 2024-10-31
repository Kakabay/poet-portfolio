import { create } from 'zustand';

interface AuthState {
  name: string | null;
  accessToken: string | null;
  refreshToken: string | null;

  setAuthData: (name: string | null, accessToken: string | null) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: sessionStorage.getItem('name') || null,
  accessToken: sessionStorage.getItem('accessToken') || null,
  refreshToken: sessionStorage.getItem('refreshToken') || null,

  setAuthData: (name, accessToken) => {
    name ? sessionStorage.setItem('name', name) : sessionStorage.removeItem('name');
    accessToken
      ? sessionStorage.setItem('accessToken', accessToken)
      : sessionStorage.removeItem('accessToken');
    set({ name, accessToken });
  },

  clearAuthData: () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('name');
    set({ name: null, accessToken: null, refreshToken: null });
  },
}));
