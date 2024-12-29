import { createServer } from "http";
import fs from "fs/promises";
import path from "path";

let PORT = process.env.PORT || 3000;
const MAX_PORT = PORT + 100; // We'll try up to 100 ports

const servFile = async (res, filePath, contentType) => {
  try {
    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      await servFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      await servFile(res, path.join("public", "style.css"), "text/css");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  server.on("error", (e) => {
    if (e.code === "EADDRINUSE") {
      console.log(`Port ${PORT} is in use, trying the next one...`);
      PORT++;
      if (PORT <= MAX_PORT) {
        server.close();
        startServer();
      } else {
        console.error(
          "Unable to find an open port. Please close some applications and try again."
        );
        process.exit(1);
      }
    } else {
      console.error("An error occurred:", e.message);
      process.exit(1);
    }
  });
};

startServer();
