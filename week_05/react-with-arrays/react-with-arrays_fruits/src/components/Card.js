import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p
      className={`card card--${color}`} /* style={{ backgroundColor: color }} */
    >
      {name}
    </p>
  );
}
