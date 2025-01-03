import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// mera tarika
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

// sir ka tarika
// app.use(express.static("public"));

// request and responce write using API
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
console.log(data);

app.get("/", (req, res) => {
  res.send("<h1>This is the home page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is the contact page</h1>");
});

app.get("/about", (req, res) => {
  return res.send(`<h1>This is the about page</h1>`);
});

app.get("/services", (req, res) => {
  return res.send(`<h1>This is the services page</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
