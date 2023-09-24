import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;

import app from "./app";

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
