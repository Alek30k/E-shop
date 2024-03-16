"use client";

import { useEffect, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const temaAlmacenado = localStorage.getItem("tema");
      if (temaAlmacenado) {
        setTheme(temaAlmacenado);
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const manejarCambioTema = () => {
    const nuevoTema = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nuevoTema);
    if (mounted) {
      localStorage.setItem("theme", nuevoTema);
    }
  };

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

  return (
    <div className="text-3xl">
      <FiSun onClick={manejarCambioTema} />
    </div>
  );

  return (
    <div className="text-3xl">
      <FiMoon onClick={manejarCambioTema} />
    </div>
  );
};

export default ThemeToggle;
