const http = require("http");

const server = http.createServer((req, res) => {
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

server.listen(PORT, () => {
  console.log(`Listning on PORT ${PORT}`);
});

// new server create
const myserever = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
})

myserever.listen(5000, () => {
  console.log("Listning on PORT 5000");
})
