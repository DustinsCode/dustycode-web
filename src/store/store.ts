import { create } from "zustand";

interface NavState {
    active: string;
    setActive: (name: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
    active: "Home",
    setActive: (name: string) => set({ active: name })
}));
