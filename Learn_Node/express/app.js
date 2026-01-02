import { PORT } from "./env.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const homePage = path.join(__dirname, "public", "index.html");
  res.status(200).sendFile(homePage);
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

//get Data from dynamic URL
app.get("/user/:id", (req, res) => {
  res.send(`<h1>Hello My user name is ${req.params.id}</h1>`);
});

app.get("/blog/:id", (req, res) => {
  res.send(`<h1> this blog is about ${req.params.id}`);
});

app.get("/user/:username/blog/:sulg", (req, res) => {
  const formatedSlug = req.params.sulg.replace(/-/g, " ");
  res.send(
    `<h1>This blog about ${formatedSlug} and this blog created by ${req.params.username}</h1>`
  );
});

// get Data from Query Parameters
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`User search product is ${req.query.search}`);
});

// Handle Form Submission in Express
// GET method
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.send("Form submited successfully!!");
// });

// Post Method
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form Submited Successfully!!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
