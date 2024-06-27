import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function onAddPeople() {
    setPeople(people + 1);
  }

  function onRemovePeople() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onAddPeople={onAddPeople}
        onRemovePeople={onRemovePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
