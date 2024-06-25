import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍏 apple",
      color: "green",
    },
    {
      id: 3,
      name: "🍓 strawberry",
      color: "red",
    },
    {
      id: 4,
      name: "🍑 peach",
      color: "orange",
    },
    {
      id: 5,
      name: "🍉 melon",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruits.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
