const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
    return;
  }

  if (req.url === "/about") {
    //blocking code
    //while user reach this line of code the process effects the other pages also like 'home' page and other pages includig about page until the process is done
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Blocking page");
    return;
  }

  res.end("Error page when no url matches");
});

server.listen(5000, () => {
  console.log("server listening at port 5000");
});
