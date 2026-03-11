import ToggleThemeButton from "./components/ToggleThemeButton";
import { useTheme } from "./context/themeProvider";

function App() {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <main
      className={`switch-page ${theme}`}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <div className="theme-info">
        <p className="theme-kicker">React Context Theme Switcher</p>
        <h1 className="theme-title">
          Du bruker nå {theme === "light" ? "light mode" : "dark mode"}!
        </h1>
        <ToggleThemeButton />
      </div>

      {theme === "dark" && (
        <img className="bulb-image" src="/bulb.jpg" alt="Light bulb" />
      )}

      <button
        type="button"
        className="switch-button"
        aria-label="Bytt tema med lysbryteren"
        onClick={toggleTheme}
      />
    </main>
  );
}

export default App;
