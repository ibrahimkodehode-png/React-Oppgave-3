import { useTheme } from "../context/themeProvider";

function ToggleThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="switch-hitbox"
      onClick={toggleTheme}
      aria-label="Bytt tema"
      title="Bytt tema"
    />
  );
}

export default ToggleThemeButton;
