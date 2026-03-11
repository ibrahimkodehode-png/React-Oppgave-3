import { useTheme } from "../context/themeProvider";

function ToggleThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="switch-button"
      onClick={toggleTheme}
      aria-label="Bytt tema"
    />
  );
}

export default ToggleThemeButton;
