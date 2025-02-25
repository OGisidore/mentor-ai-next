import useColorMode from "@/hooks/useColorMode";
import { useEffect, useState } from "react";
import { CustomIcon } from "../custumcon/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMoon, faWater } from "@fortawesome/free-solid-svg-icons";

const DarkModeSwitcher = () => {
  const [, setColorMode] = useColorMode() as [string, (value: string) => void];
  const [currentMode, setCurrentMode] = useState("light");

  useEffect(() => {
    // Set the color mode from localStorage if it exists
    const savedMode = localStorage.getItem("colorMode") || "light";
    setCurrentMode(savedMode);
    setColorMode(savedMode);
  }, [setColorMode]);

  const changeTheme = (colorMode: string) => {
    setColorMode(colorMode);
    setCurrentMode(colorMode);
    localStorage.setItem("colorMode", colorMode);
  };

  return (
    <div>
      <div className="flex items-center space-x-3">
        <button
          className="theme-btn w-10 h-10 rounded-full border-tex transition-all duration-200 hover:scale-110 flex items-center justify-center bg-[var(--bg-color)] border-2 shadow-md"
          data-theme="dark"
          onClick={() => changeTheme('dark')}
          title="Dark Theme">
          <FontAwesomeIcon icon={faMoon} className=" text-xl text-[var(--text-color)]" />
        </button>
        <button
          className="theme-btn w-10 h-10 rounded-full transition-all border-tex duration-200 hover:scale-110 flex items-center justify-center bg-[var(--bg-color)] border-2 shadow-md"
          data-theme="green"
          onClick={() => changeTheme('green')}
          title="Green Theme">
          <FontAwesomeIcon icon={faLeaf} className=" text-xl text-[var(--text-color)]" />
        </button>
        <button
          className="theme-btn w-10 h-10 rounded-full border-text transition-all duration-200 hover:scale-110 flex items-center justify-center bg-[var(--bg-color)] border-2 shadow-md"
          data-theme="blue"
          onClick={() => changeTheme('blue')}
          title="Blue Theme">
          <FontAwesomeIcon icon={faWater} className=" text-xl text-[var(--text-color)]" />

        </button>
      </div>

    </div>
  );
};

export default DarkModeSwitcher;

