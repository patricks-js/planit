"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  function handleThemeSwitch() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeSwitch}
    >
      <Sun className="dark:-rotate-90 size-5 rotate-0 scale-100 transition-transform duration-200 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
