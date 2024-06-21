import "./styles.css";

export default function App() {
  return <Greeting name="Andrea" isCoach />;
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      <h1>Hello {isCoach ? (name = "Coach") : name}!</h1>
    </div>
  );
}
