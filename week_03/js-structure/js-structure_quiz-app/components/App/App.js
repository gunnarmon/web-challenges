import { Header } from "./components/Header/Header.js";
import { Form } from "./components/Form/Form.js";
import { CardList } from "./components/CardList/CardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
