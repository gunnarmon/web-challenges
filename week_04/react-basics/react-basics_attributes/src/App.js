import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Your question is important!</h2>
      <label id="question" htmlFor="question">
        Type your question here:
        <input id="question" htmlFor="question"></input>
      </label>
      <a className="artcle__link" href="www.google.com">
        Link to the answer
      </a>
    </article>
  );
}
