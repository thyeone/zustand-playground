import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type MemoState = {
  memo: string[];
  actions: {
    updateMemo: (memo: string) => void;
    resetMemo: () => void;
  };
};

const initialState = {
  memo: [],
};

const useMemoStore = create(
  devtools(
    persist<MemoState>(
      (set) => ({
        ...initialState,
        actions: {
          updateMemo: (memo) => {
            set((state) => ({ memo: [...state.memo, memo] }));
          },
          resetMemo: () => {
            set(() => ({ ...initialState }));
          },
        },
      }),
      {
        name: 'memo',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export const useMemos = () => useMemoStore((state) => state.memo);
export const useMemoActions = () => useMemoStore((state) => state.actions);
