import { createServer } from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 3000;

const servFile = (res, filePath, ContentType) => {
  try {
    const data = fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": ContentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return servFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return servFile(res, path.join("public", "style.css"), "text/css");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
