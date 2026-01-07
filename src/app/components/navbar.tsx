"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { IconShadow, IconShadowOff } from "@tabler/icons-react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950/60 backdrop-blur-2xl text-neutral-600 dark:text-white absolute top-0 left-0 right-0 border-b border-neutral-100 dark:border-neutral-800 shadow-md w-full transition ease-in-out duration-300">
      <div className="flex w-full px-4 py-4 gap-4">
        <Link href={"/"} className=" hover:text-black dark:hover:text-blue-300">Home</Link>
        <Link href={"/about"} className=" hover:text-black dark:hover:text-blue-300">About</Link>
        <Link href={"/contact"} className=" hover:text-black dark:hover:text-blue-300">Contact</Link>
        <button
          onClick={handleThemeChange}
          className="rounded-lg cursor-pointer dark:text-white   hover:text-black dark:hover:text-blue-400 text-neutral-600"
        >
          {theme === "dark" ? <IconShadowOff /> : <IconShadow />}
        </button>
      </div>
    </div>
  );
};
