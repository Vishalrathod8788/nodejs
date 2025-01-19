import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// mera tarika
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

// sir ka tarika
// app.use(express.static("public"));

app.get("/contact", (req, res) => {
  console.log(req.query);
  res.send(`<h1>User Name : ${req.query.name}</h1>`);
  res.send(`<h1>User Email : ${req.query.email}</h1>`);
  res.send(`<h1>User Message : ${req.query.message}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
