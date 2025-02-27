import React from "react";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to React!</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
