import { create } from "zustand";

const useStore = create((set) => ({
  mode: "light",
  label: "Darkmode Off",
  logo: "logo",
  setMode: (newMode, newlabel) => set({ mode: newMode, label: newlabel }),
  setLogo: (newLogo) => set({ logo: newLogo }),
}));

export default useStore;
