import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  function handleReset() {
    setCode("");
  }

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <div>
        <p>Your code: {code}</p>
      </div>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
