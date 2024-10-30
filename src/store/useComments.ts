import { create } from "zustand";

interface CommentsState {
  userComments: any[]; // Замените `any` на ваш тип комментариев, если он определён
  setComments: (comments: any[]) => void;
  clearComments: () => void;
}

export const useCommentsStore = create<CommentsState>((set) => ({
  userComments: JSON.parse(sessionStorage.getItem("userComments") || "[]"),

  setComments: (userComments) => {
    sessionStorage.setItem("userComments", JSON.stringify(userComments));
    set({ userComments });
  },

  clearComments: () => {
    sessionStorage.removeItem("userComments");
    set({ userComments: [] });
  },
}));
