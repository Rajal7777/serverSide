const http = require("http");
const { readFileSync } = require("fs");

const page = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(page);
    res.end();
  }
});

server.listen(5000);
