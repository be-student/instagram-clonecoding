import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<UserState>((set) => ({
  isLoggedIn: false,
  email: '',
  password: '',
  login: (email, password) => set({ isLoggedIn: true, email, password }),
  logout: () => set({ isLoggedIn: false, email: '', password: '' }),
}));
