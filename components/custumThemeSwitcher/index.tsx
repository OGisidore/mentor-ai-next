import useColorMode from "@/hooks/useColorMode";
import { useEffect, useState } from "react";
import { CustomIcon } from "../custumcon/icon";

const DarkModeSwitcher = () => {
  const [, setColorMode] = useColorMode() as [string, (value: string) => void];
  const [currentMode, setCurrentMode] = useState("light");

  useEffect(() => {
    // Set the color mode from localStorage if it exists
    const savedMode = localStorage.getItem("colorMode") || "light";
    setCurrentMode(savedMode);
    setColorMode(savedMode);
  }, [setColorMode]);

  const changeTheme = () => {
    const newMode = currentMode === "light" ? "dark" : "light";
    setColorMode(newMode);
    setCurrentMode(newMode);
    localStorage.setItem("colorMode", newMode);
  };

  return (
    <div>
      <label className="relative m-0 block h-7 w-14 rounded-full bg-muted-foreground">
        <input
          type="checkbox"
          onChange={changeTheme}
          checked={currentMode === "dark"}
          className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-muted shadow-sm duration-75 ease-linear ${
            currentMode === "dark" && "!right-[3px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            {/* Light mode icon */}
            <CustomIcon name="Sun" size={16} />
          </span>
          <span className="hidden dark:inline-block">
            {/* Dark mode icon */}
            <CustomIcon name="Dark" size={16} />
          </span>
        </span>
      </label>
    </div>
  );
};

export default DarkModeSwitcher;