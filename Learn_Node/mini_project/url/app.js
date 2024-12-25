import { createServer } from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 3000;

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await fs.readFile(path.join("public", "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
      }
    } else if (req.url === "/style.css") {
      try {
        const data = await fs.readFile(path.join("public", "style.css"));
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
      }
    } else {
      // Add a default case for unknown routes
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page Not Found");
    }
  } else {
    // Add a default case for non-GET methods
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
