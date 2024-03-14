"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") setDarkMode(true);
  // }, []);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);
  if (resolvedTheme === "dark") {
    return (
      <div className="text-3xl">
        <FiSun onClick={() => setTheme("light")} />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="text-3xl">
        <FiMoon onClick={() => setTheme("dark")} />
      </div>
    );
  }
};

export default ThemeToggle;
