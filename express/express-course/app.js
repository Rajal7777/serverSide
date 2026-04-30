const express = require("express");
const app = express();
const { people } = require("../data");

//static assets
// express.static() is built in middleware in Express that serves static files
//here the file path './public' is being resolved relative to the folder where nodeJs is running. not ('../public')
app.use(express.static("./public"));

//Parse form data
app.use(express.urlencoded({ extended: false }));

//GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POST
app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log('name', name)  //Rajal
  console.log(req.body)  //{ name: 'Rajal'}
 if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  //no name
  res.status(401).send("please provide credentials");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
