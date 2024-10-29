import { useAuthStore } from '@/store/useAuthStore';
import axios from 'axios';

interface User {
  id: number;
  first_name: string;
  email: string;
  is_activated: boolean;
}

interface UserData {
  error?: string;
  token: string;
  user: User;
}

interface RegisterBody {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginBody {
  email: string;
  password: string;
}

class PoetService {
  private URL = 'http://216.250.8.93:7777/app/api/';
  private authStore = useAuthStore;

  postUser = async (body: RegisterBody) => {
    const userData = await axios.post<UserData>(`${this.URL}signup`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (userData.data.token) {
      this.authStore.getState().setAuthData(userData.data.user.first_name, userData.data.token);
    }

    return userData;
  };

  loginUser = async (body: LoginBody) => {
    const userData = await axios.post<UserData>(`${this.URL}login`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (userData.data.token) {
      this.authStore.getState().setAuthData(userData.data.user.first_name, userData.data.token);
    }

    return userData;
  };

  refreshToken = async () => {
    // реализация для refreshToken
  };
}

export default new PoetService();
