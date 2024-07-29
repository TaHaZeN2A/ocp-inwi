import { create } from "zustand";

type NewPcapState = {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
};

export const useNewPcap = create<NewPcapState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));