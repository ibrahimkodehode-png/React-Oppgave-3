import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const themes = {
  light: {
    name: "light",
    background: "#f5f5f5",
    text: "#222222",
    buttonBackground: "#333333",
    buttonText: "#ffffff",
  },
  dark: {
    name: "dark",
    background: "#1a1a1a",
    text: "#f5f5f5",
    buttonBackground: "#eeeeee",
    buttonText: "#000000",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
      colors: themes[theme],
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
