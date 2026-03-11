import { useTheme } from "../context/themeProvider";

function ToggleThemeButton() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      style={{
        backgroundColor: colors.buttonBackground,
        color: colors.buttonText,
      }}
    >
      {theme === "light" ? "Bytt til dark mode" : "Bytt til light mode"}
    </button>
  );
}

export default ToggleThemeButton;
