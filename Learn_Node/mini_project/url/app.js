import { createServer } from "http";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

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
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await fs.writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      await servFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      await servFile(res, path.join("public", "style.css"), "text/css");
    } else {
      const links = await loadLinks();
      const shortCode = req.url.slice(1);
      if (links[shortCode]) {
        res.writeHead(302, { Location: links[shortCode] });
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
      }
    }
  } else if (req.method === "POST" && req.url === "/shorten") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const links = await loadLinks();
        const { url, shortCode } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "URL is required" }));
          return;
        }

        const finalShortCode =
          shortCode || crypto.randomBytes(3).toString("hex");

        if (links[finalShortCode]) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Shortcode already exists, please choose another one",
            })
          );
          return;
        }

        links[finalShortCode] = url;
        await saveLinks(links);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ shortUrl: `/${finalShortCode}` }));
      } catch (error) {
        console.error("Error processing request:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server error" }));
      }
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
      server.close();
      startServer();
    } else {
      console.error("An error occurred:", e.message);
      process.exit(1);
    }
  });
};

startServer();
