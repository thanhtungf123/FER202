import React, { useContext } from "react";
import ThemeContext, { themes } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme === themes.light ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggleButton;
