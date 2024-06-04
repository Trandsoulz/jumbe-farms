import { create } from "zustand";

interface StoreInterface {
  state: string;
  setState: (state: string) => void;
}

export const Store = create<StoreInterface>((set) => ({
  state: "",
  setState: (state) => set({ state }),
}));
