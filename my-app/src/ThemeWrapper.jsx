import { useEffect } from "react";
import useStore from "./store/app.zustand";

const ThemeWrapper = () => {
  const { mode } = useStore();

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return null;
};

export default ThemeWrapper;
