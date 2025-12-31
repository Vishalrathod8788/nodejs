import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }));

// Serve the contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send(`
    <h1>User Name : ${req.body.user.name}</h1>
    <h1>User Email : ${req.body.user.email}</h1>
    <h1>User Message : ${req.body.user.message}</h1>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
