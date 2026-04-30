const express = require("express");
const app = express();

//middleware req=> middleware => res

//express automatically pass the parameter -> (req, res, next) from app.get
const logger = (req, res, next) => {
  const method = req.method; //HTTP method like GET, POST, PUT, DELETE
  const url = req.url;   // from req object we get the value url like '/about'
  const time = new Date().getFullYear();
  console.log("method:", method, "url:", url, "time:", time); //default GET/ '/'2026
  next(); // next() tells express i am done you can move to the next middleware or route handler
};


// '/' runs 1st then the logger runs-> next() -> then res.send()
//logger with out () is the value{reference} which will be called by the express later when we get the req.
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
