import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("light");

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

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
