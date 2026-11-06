import React, { useEffect, useState } from "react";
import Switch from "./Switch";

export default function Header() {
  const [theme, setThemeState] = useState();
  useEffect(() => {
    setThemeState(initTheme());
  }, [theme]);

  return (
    <header>
      <div className="fixed z-[-1] w-full min-h-[235px] rounded-b-[20px] bg-[#F7F9FF] dark:bg-[#20222F]"></div>
      <div className="px-[24px] py-[36px] w-full max-w-[1158px] mx-auto sm:flex sm: justify-between">
        <div>
          <h2 className="font-[700] text-[24px] text-[#1D1F29] dark:text-white">
            Social Media Dashboard
          </h2>

          <p className="font-[700] text-[14px] text-[#63687D] dark:text-[#8C98C6]">
            Total Followers: 23,004
          </p>
        </div>
        <hr className="mt-[24px] mb-[16px] dark:text-[#8C98C6] sm:hidden" />

        <div className="flex items-center justify-between sm:gap-[12px]">
          <p className="font-[700] text-[14px] text-[#63687D] dark:text-white">
            Dark Mode
          </p>

          <Switch
            checked={theme === "dark"}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setThemeState(theme === "light" ? "dark" : "light");
            }}
          />
        </div>
      </div>
    </header>
  );
}

function getTheme() {
  return localStorage.getItem("theme");
}

function initTheme() {
  let currentTheme = getTheme();
  if (!["light", "dark"].includes(currentTheme)) {
    currentTheme = "light";
    localStorage.setItem("theme", "light");
  }
  document.documentElement.classList.toggle("dark", currentTheme === "dark");
  return currentTheme;
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}
