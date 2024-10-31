import { useAuthStore } from "@/store/useAuthStore";
import axios from "@/services/axios.config";
import { UserCommentsType } from "./types/get-comments.type";
import { useLoginStore } from "@/store/useLogin";

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
  private URL = "http://216.250.8.93:7777/app/api/";
  private authStore = useAuthStore;
  private loginStore = useLoginStore;

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
    const setLoginError = this.loginStore.getState().setLoginError;

    try {
      const response = await axios.post<UserData>(`${this.URL}login`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.error) {
        setLoginError(response.data.error); // Ошибка от сервера
      } else if (response.data.token) {
        this.authStore
          .getState()
          .setAuthData(response.data.user.first_name, response.data.token);
      }

      return response;
    } catch (error) {
      setLoginError("Ошибка входа, попробуйте снова.");
      console.error("Ошибка в loginUser:", error);
      throw error;
    }
  };

  refreshToken = async (token: string | null) => {
    const { data } = await axios.post(`${this.URL}refresh`, token, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  };

  postComment = async (body: { comment_text: string }) => {
    const token = this.authStore.getState().accessToken;

    return await axios.post(`${this.URL}comments`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  postPoem = async (body: { poem_id: string }) => {
    const token = this.authStore.getState().accessToken;

    return await axios.post(`${this.URL}pin`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // GET

  getUserComments = async () => {
    const token = this.authStore.getState().accessToken;

    if (!token) throw new Error("No access token available");

    return await axios.get<UserCommentsType>(`${this.URL}comments`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export default new PoetService();
