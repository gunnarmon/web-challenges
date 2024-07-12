import { server } from "./server.js";

const port = 8000;

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
