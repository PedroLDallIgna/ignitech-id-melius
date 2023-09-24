import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

import App from "./app";
const app = new App();

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
