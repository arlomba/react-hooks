import { useState } from "react";

export default function FontSizeSol() {
  const [fontSize, setFontSize] = useState(15);

  const increaseFont = () => setFontSize((fontSize) => fontSize + 5);
  const decreaseFont = () =>
    setFontSize((fontSize) => fontSize > 0 && fontSize - 5);

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>{fontSize}px</p>
      <button onClick={increaseFont}>+5</button>
      <button onClick={decreaseFont}>-5</button>
    </div>
  );
}
