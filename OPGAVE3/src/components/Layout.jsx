import { useTheme } from "../context/themeProvider";

function Layout({ children }) {
  const { theme, colors } = useTheme();

  return (
    <main
      className="page"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        backgroundImage:
          theme === "light"
            ? 'linear-gradient(rgba(245, 245, 245, 0.55), rgba(245, 245, 245, 0.7)), url("/switch.jpg")'
            : "none",
      }}
    >
      <section
        className="theme-card"
        style={{
          backgroundColor: colors.cardBackground,
          color: colors.text,
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
        }}
      >
        {children}
      </section>
    </main>
  );
}

export default Layout;
