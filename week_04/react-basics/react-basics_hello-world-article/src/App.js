import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is a h1</h1>
      <h2>This is a h2</h2>
      <p>This is a paragraph</p>
    </article>
  );
}
