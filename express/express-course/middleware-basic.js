const express = require("express");
const app = express();

//middleware req=> middleware => res

//express automatically pass the parameter -> (req, res, next) from app.get
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log("method:", method, "url:", url, "time:", time);
  next(); // this will return to the app.get the next process
};

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
