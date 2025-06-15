
"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to false, useEffect will determine actual state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else { // This covers storedTheme === 'dark' or storedTheme === null (defaults to dark)
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      if (!storedTheme) { // If it was null, explicitly set it to dark in localStorage
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    // Render a disabled button or null while waiting for mount to avoid hydration mismatch
    return <Button variant="ghost" size="icon" className="h-9 w-9" disabled aria-label="Loading theme toggle" />;
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="h-9 w-9 hover:bg-primary/10 focus:ring-accent">
      {isDarkMode ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5 text-primary" />}
    </Button>
  );
}
