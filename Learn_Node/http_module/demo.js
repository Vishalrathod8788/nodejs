const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("This is About page");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
