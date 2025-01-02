import express from "express";
import { PORT } from "./env.js";

const restront = express();

restront.use((req, res, next) => {
  console.log("Welcome to our restront!");
  next();
});

restront.get("/", (req, res) => {
  res.send("<h1>Welcome to our restront!</h1>");
});

const foodRouter = express.Router();

foodRouter.get("/", (req, res) => {
  res.send("<h1>Welcome to our Food Department!</h1>");
});

foodRouter.get("/breakfast", (req, res) => {
  return res.send("<h1>Good morning! Here some pancakes for you.</h1>");
});

foodRouter.get("/lunch", (req, res) => {
  return res.send("<h1>Good afternoon! Here some pizza for you.</h1>");
});

restront.use("/food", foodRouter);

restront.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
