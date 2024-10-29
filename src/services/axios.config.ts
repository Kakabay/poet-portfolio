import axios, { AxiosError, AxiosRequestConfig } from "axios";
import poetService from "./poet.service";

// Установите базовый URL для всех запросов
axios.defaults.baseURL = "http://216.250.8.93:7777/app/api";

// Интерсептор для обработки обновления токенов
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Проверяем наличие originalRequest и статус ошибки 401
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Помечаем запрос как повторный

      const newToken = await poetService.refreshToken();
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
