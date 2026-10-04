"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const Theme = () => {
  const [mode, setMode] = useState<boolean>(false);

  const handleMode = () => {
    setMode(!mode);
    const newMode = mode;
    if (newMode) {
      setMode(false);
      localStorage.setItem("mode", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setMode(true);
      localStorage.setItem("mode", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const isDark = localStorage.getItem("mode");

    if (isDark === "dark") {
      setMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div
      onClick={handleMode}
      className="max-[500px]:fixed max-[500px]:bottom-10 max-[500px]:left-5 max-[500px]:z-100 max-[500px]:bg-surface max-[500px]:p-1.5 max-[500px]:rounded-full text-muted-foreground hover:text-foreground transition-all duration-150 cursor-pointer text-large font-bold"
    >
      {mode ? (
        <Icon icon={"carbon:light"} />
      ) : (
        <Icon icon={"ant-design:moon-outlined"} />
      )}
    </div>
  );
};

export default Theme;
