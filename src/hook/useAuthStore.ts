import { create } from 'zustand';

interface UserState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Helper functions to safely interact with localStorage
const getStoredAuthState = () => {
  try {
    const storedState = localStorage.getItem('authState');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      return {
        isLoggedIn: parsedState.isLoggedIn || false,
        email: parsedState.email || '',
        password: parsedState.password || '',
      };
    }
  } catch (error) {
    console.error('Error reading auth state from localStorage:', error);
  }
  return { isLoggedIn: false, email: '', password: '' };
};

const saveAuthState = (state: Pick<UserState, 'isLoggedIn' | 'email' | 'password'>) => {
  try {
    localStorage.setItem('authState', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving auth state to localStorage:', error);
  }
};

// Initialize state from localStorage
const initialState = getStoredAuthState();

export const useAuthStore = create<UserState>((set) => ({
  // Initialize with values from localStorage or defaults
  isLoggedIn: initialState.isLoggedIn,
  email: initialState.email,
  password: initialState.password,
  
  login: (email, password) => {
    const newState = { isLoggedIn: true, email, password };
    set(newState);
    saveAuthState(newState);
  },
  
  logout: () => {
    const newState = { isLoggedIn: false, email: '', password: '' };
    set(newState);
    saveAuthState(newState);
  },
}));
