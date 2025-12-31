import { PORT } from "./env.js";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Express server!!");
});

app.post("/", (req, res) => {
  res.status(201).send("Data posted with Expressjs!!");
});

app.get("/test", (req, res) => {
  res.status(200).send("true");
});

app.get("/status", (req, res) => {
  res.status(200).send("Express Server is up and running!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
