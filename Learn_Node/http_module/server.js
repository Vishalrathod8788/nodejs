const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, I'm Vishal Rathod this is a Home Page");
  } else if (req.url === "/about") {
    res.end("Hello, I'm Vishal Rathod this is an About Page");
  } else if (req.url === "/contact") {
    res.end("Hello, I'm Vishal Rathod this is a Contact Page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

const PORT = 5544;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} `);
});
