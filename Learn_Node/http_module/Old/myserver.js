const http = require("http");

const myserver = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Home Page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("Welcome to About Page");
    res.end();
  }
});

const PORT = 3000;

myserver.listen(PORT, () => {
  console.log(`Listning on PORT ${PORT}`);
});
