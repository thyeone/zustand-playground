import { create } from 'zustand';

type CounterState = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
    customIncrease: (num: number) => void;
  };
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  actions: {
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    customIncrease: (num) => set((state) => ({ count: state.count + num })),
  },
}));

export const useCount = () => useCounterStore((state) => state.count);
export const useCounterActions = () => useCounterStore((state) => state.actions);
