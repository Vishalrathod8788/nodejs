import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// mera tarika
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

// sir ka tarika
// app.use(express.static("public"));

app.get("/profile/:username", (req, res) => {
  // console.log(req.params);
  res.send(`<h1>My Name is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(
    `<h1>Article is ${formatedSlug} Created by ${req.params.username}</h1>`
  );
});

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>User Search Page No. in  ${req.query.search} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
