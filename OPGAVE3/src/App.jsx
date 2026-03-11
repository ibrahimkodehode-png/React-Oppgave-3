import ToggleThemeButton from "./components/ToggleThemeButton";
import { useTheme } from "./context/themeProvider";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`switch-page ${theme}`}>
      <ToggleThemeButton />

      {theme === "dark" && (
        <img className="bulb-image" src="/bulb.jpg" alt="Light bulb" />
      )}
    </main>
  );
}

export default App;
