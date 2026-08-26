import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "https://unpkg.com/@progress/kendo-theme-meridian@14.5.0/dist/meridian-main.css",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const meridianMain =
    "https://unpkg.com/@progress/kendo-theme-meridian@14.5.0/dist/meridian-main.css";
  const [theme, setThemeState] = useState<string>(() => {
    const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return savedTheme?.includes("@progress/kendo-theme-meridian") ? savedTheme : meridianMain;
  });

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme;
    }

    document.body.classList.add("k-body");

    return () => {
      document.body.classList.remove("k-body");
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
