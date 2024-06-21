import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("<- I'm with stupid");
  }
  return (
    <div>
      <Button
        color="yellow"
        disabled={false}
        text={"CLICK ME!"}
        onClick={handleClick}
      />
      <Button
        color="black"
        disabled={true}
        text={"DON'T CLICK ME!"}
        onClick={handleClick}
      />
      <Button
        color="orange"
        disabled={false}
        text={"CLICK ME HARDER!"}
        onClick={handleClick}
      />
      <Button
        color="red"
        disabled={false}
        text={"CLICK ME EVEN HARDER!"}
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
