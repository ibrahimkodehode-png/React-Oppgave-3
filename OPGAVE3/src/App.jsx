import ToggleThemeButton from "./components/ToggleThemeButton";
import { useTheme } from "./context/themeProvider";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`switch-page ${theme === "dark" ? "dark" : "light"}`}>
      <div className="switch-wrapper">
        <ToggleThemeButton />
      </div>
    </main>
  );
}

export default App;
