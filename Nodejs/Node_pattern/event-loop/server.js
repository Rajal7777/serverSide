const http = require("http");

//console.log(http);
//createServer() -> is a fundamental method of Node.js used to initialize a new server instance.

const server = http.createServer((req, res) => {
  console.log("res", res);

  res.end("Hello");
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
