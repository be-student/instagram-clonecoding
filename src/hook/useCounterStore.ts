import { create } from 'zustand';

interface CounterState {
  count: number;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
