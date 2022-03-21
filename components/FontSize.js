import { useState } from "react";

export default function FontSize() {
  const [fontSize, setFontSize] = useState(15);

  const sumFontsize = () => setFontSize(fontSize + 5);
  const subFontsize = () => setFontSize(fontSize > 0 && fontSize - 5);

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>{fontSize}px</p>
      <button onClick={sumFontsize}>+5</button>
      <button onClick={subFontsize}>-5</button>
    </div>
  );
}
