import ToggleThemeButton from "./components/ToggleThemeButton";
import { useTheme } from "./context/themeProvider";

function App() {
  const { theme } = useTheme();

  return (
    <main className={`switch-page ${theme}`}>
      <ToggleThemeButton />
    </main>
  );
}

export default App;
