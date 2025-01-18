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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
