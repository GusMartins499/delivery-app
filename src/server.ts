import express from "express";
import { routes } from "./routes";

import packageJson from "../package.json";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/api", (request, response) => {
  return response.json({ message: `API version: ${packageJson.version}`})
})

app.listen(3000, () => console.log("Server is running"))