import { create } from 'zustand';

interface AuthState {
  name: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  setAuthData: (name: string | null, accessToken: string | null) => void;
  setRefreshToken: (refreshToken: string) => void;
  clearAuthData: () => void;

  registerSuccess: boolean;
  setRegisterSuccess: (val: boolean) => void;
  loginSuccess: boolean;
  setLoginSuccess: (val: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: sessionStorage.getItem('name'),
  accessToken: sessionStorage.getItem('accessToken'),
  refreshToken: sessionStorage.getItem('refreshToken'),

  registerSuccess: false,
  loginSuccess: false,

  setRegisterSuccess: (val) => set(() => ({ registerSuccess: val })),
  setLoginSuccess: (val) => set(() => ({ loginSuccess: val })),

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

  // Отдельный метод для установки refreshToken
  setRefreshToken: (refreshToken) => {
    sessionStorage.setItem('refreshToken', refreshToken);
    set({ refreshToken });
  },

  clearAuthData: () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('name');
    set({ name: null, accessToken: null, refreshToken: null });
  },
}));
