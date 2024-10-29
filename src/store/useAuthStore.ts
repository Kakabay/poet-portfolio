import { create } from 'zustand';

interface AuthState {
  name: string | null;
  accessToken: string | null;
  setAuthData: (name: string | null, accessToken: string | null) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: sessionStorage.getItem('name'),
  accessToken: sessionStorage.getItem('accessToken'),
  setAuthData: (name, accessToken) => {
    if (accessToken) {
      sessionStorage.setItem('accessToken', accessToken);
    } else {
      sessionStorage.removeItem('accessToken');
    }

    if (name) {
      sessionStorage.setItem('name', name);
    } else {
      sessionStorage.removeItem('name');
    }

    set({ name, accessToken });
  },
  clearAuthData: () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('name');
    set({ name: null, accessToken: null });
  },
}));
