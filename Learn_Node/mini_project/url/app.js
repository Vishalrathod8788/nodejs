import { createServer, get } from "http";
import { fs } from "fs/promises";

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await fs.reasFile("./index.html");
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        req.end("404 Page Not Found");
      }
    }
  }
});
