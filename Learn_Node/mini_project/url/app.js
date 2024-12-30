import { createServer } from "http";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import {} from "fs";

let PORT = process.env.PORT || 3000;
const DATA_FILE = path.join("data", "links.json");

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

const loadLinks = async () => {
  try {
    const data = await fs.readFile("DATA_FILE", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile("DATA_FILE", JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(links));
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
  } else if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      console.log(body);
      const { url, shortCode } = JSON.parse(body);
      if (url) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Shortened URL: /${url.split("/").pop()}`);
      } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("URL is required");
      }

      const finalShortcode = shortCode || crypto.randomBytes(3).toString("hex");

      if (links[finalShortcode]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Shortcode already exists, please choose another one");
      }

      links[finalShort] = url;

      await saveLinks(links);
    });
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
