const http = require("http");
const path = require("path");
const { readFileSync } = require("fs");

console.log("dirname", __dirname); //current module

const homePage = readFileSync("../navbar-app/index.html");

const homeStyles = readFileSync(
  path.join(__dirname, "..", "navbar-app", "style.css"),
);

console.log("homepath", homeStyles);
const homeImage = readFileSync(
  path.join(__dirname, "..", "navbar-app", "logo.svg"),
);

const homeLogic = readFileSync(
  path.join(__dirname, "../", "navbar-app", "browser-app.js"),
);

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>About page </h2>");
    res.end(); //res.end() tells the stream it should no longer expect more data and can finalize the response
  }

  //styles
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  //image
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }

  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening at port 5000");
});
