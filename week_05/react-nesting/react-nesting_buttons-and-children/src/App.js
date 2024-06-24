import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"I'm a button"}</Button>
      <Button>{"I'm a button, too!"}</Button>
      <Button>
        No you are <strong>not</strong>!
      </Button>
      <Button>{"Yes he is!"}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
