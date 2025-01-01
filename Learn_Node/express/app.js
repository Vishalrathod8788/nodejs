import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send(`<h1>This is the home page</h1>`);
});

app.get("/contact", (req, res) => {
  return res.send(`<div class="container">
      <h1>URL Shortener</h1>
      <form id="shorten-form">
        <label for="url">Enter your URL:</label>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter your URL here"
          required
        />
        <label for="short-url">Short Code :</label>
        <input
          type="text"
          name="shortCode"
          id="shortCode"
          placeholder="Enter your short code here"
        />
        <button type="submit">Shorten</button>
        <h2>Shortened URLs</h2>
        <ul id="shortened-urls"></ul>
      </form>
    </div>`);
});

app.get("/about", (req, res) => {
  return res.send(`<h1>This is the about page</h1>`);
});

app.get("/services", (req, res) => {
  return res.send(`<h1>This is the services page</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
