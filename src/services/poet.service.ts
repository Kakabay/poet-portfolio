import { useAuthStore } from '@/store/useAuthStore';
import axios from 'axios';
import { UserCommentsType } from './types/get-comments.type';

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

  constructor() {
    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          try {
            const newToken = await this.refreshToken();
            if (newToken) {
              this.authStore
                .getState()
                .setAuthData(this.authStore.getInitialState().name, newToken);
              error.config.headers['Authorization'] = `Bearer ${newToken}`;
              return axios(error.config);
            }
          } catch (refreshError) {
            console.error('Не удалось обновить токен', refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  postUser = async (body: RegisterBody) => {
    const { data } = await axios.post<UserData>(`${this.URL}signup`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (data.token) {
      this.authStore.getState().setAuthData(data.user.first_name, data.token);
    }
    return data;
  };

  loginUser = async (body: LoginBody) => {
    const { data } = await axios.post<UserData>(`${this.URL}login`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (data.token) {
      this.authStore.getState().setAuthData(data.user.first_name, data.token);
    }

    return data;
  };

  refreshToken = async () => {
    const token = this.authStore.getInitialState().accessToken;
    if (!token) throw new Error('Нет токена для обновления');

    const { data } = await axios.post(
      `${this.URL}refresh`,
      { token },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return data.token;
  };

  postComment = async (body: { comment_text: string }) => {
    const token = this.authStore.getState().accessToken;

    return await axios.post(`${this.URL}comments`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  postPoem = async (body: { poem_id: string }) => {
    const token = this.authStore.getState().accessToken;

    const { data } = await axios.post(`${this.URL}pin`, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  // GET

  getComments = async () => {
    const { data } = await axios.get<UserCommentsType>(`${this.URL}comments`);

    return data.comments;
  };

  getUserComments = async () => {
    const token = this.authStore.getState().accessToken;

    if (!token) throw new Error('No access token available');

    return await axios.get<UserCommentsType>(`${this.URL}comments`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  getPinPoems = async () => {
    const token = this.authStore.getState().accessToken;

    const { data } = await axios.get(`${this.URL}pinned`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };
}

export default new PoetService();
