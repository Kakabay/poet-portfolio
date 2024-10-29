import { useAuthStore } from "@/store/useAuthStore";
import axios from "./axios.config";

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

interface RefreshBody {
  token: string;
}

class PoetService {
  private URL = "http://216.250.8.93:7777/app/api/";
  private authStore = useAuthStore;

  postUser = async (body: RegisterBody) => {
    const userData = await axios.post<UserData>(`${this.URL}signup`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (userData.data.token) {
      this.authStore
        .getState()
        .setAuthData(userData.data.user.first_name, userData.data.token);
    }

    return userData;
  };

  loginUser = async (body: LoginBody) => {
    const userData = await axios.post<UserData>(`${this.URL}login`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (userData.data.token) {
      this.authStore
        .getState()
        .setAuthData(userData.data.user.first_name, userData.data.token);
    }

    return userData;
  };

  refreshToken = async () => {
    const refreshToken = this.authStore.getState().refreshToken;

    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axios.post<UserData>(`${this.URL}refresh`, {
      token: refreshToken,
    });

    const { token } = response.data;

    if (token) {
      this.authStore.getState().setAuthData(null, token);
    }

    return token;
  };
}

export default new PoetService();
