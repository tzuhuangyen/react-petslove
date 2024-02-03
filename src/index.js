const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname.startsWith("/dist")) {
    const filePath = path.join(__dirname, pathname);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("404 Not Found");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end();
      }
    });
  } else if (pathname === "/api/products" && req.method === "GET") {
    try {
      const response = await axios.get("http://localhost:3000/products");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching data from API:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
    }
  } else {
    const indexPath = path.join(__dirname, "/dist/index.html");
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

const port = 3000;
