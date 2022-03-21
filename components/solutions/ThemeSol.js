import { useState } from "react";

export default function ThemeSol() {
  const [theme, setTheme] = useState("light");

  const toLight = () => setTheme("light");
  const toDark = () => setTheme("dark");

  return (
    <div>
      <p>Current theme: {theme}</p>
      {theme === "light" ? (
        <button onClick={toDark}>Change to Dark</button>
      ) : (
        <button onClick={toLight}>Change to Light</button>
      )}
    </div>
  );
}
