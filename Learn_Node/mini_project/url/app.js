import { createServer, get } from "http";
import { fs } from "fs/promises";
import { path } from "path";

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await fs.readFile(path.join("public", "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        req.end("404 Page Not Found");
      }
    } else if (req.method === "GET") {
      if (req.url === "/") {
        try {
          const data = await fs.readFile(path.join("public", "style.css"));
          req.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        } catch (error) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          req.end("404 Page Not Found");
        }
      }
    }
  }
});
