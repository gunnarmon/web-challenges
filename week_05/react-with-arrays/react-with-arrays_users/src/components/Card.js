import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  //destructure user-prop:
  const { name, roles, about } = user;

  return (
    <article className="card">
      <h2>{name}</h2>
      <ul className="card__taglist">
        {roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
