const http = require("http");

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }

  if (req.url === "/contact") {
    res.write("Welcome to our contact page");
    res.end();
  }
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server Started PORT on ${PORT}`);
});

myServer.emit("start");
