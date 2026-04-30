const express = require("express");
const app = express();
const { people } = require("../data");

//static assets
// express.static() is built in middleware in Express that serves static files
//here the file path './public' is being resolved relative to the folder where nodeJs is running. not ('../public')
app.use(express.static("./public"));

//Parse form data {express provided -> middleware}
app.use(express.urlencoded({ extended: false }));

//Parse json data {express provided -> middleware}
//if a post req sends JSON data automatically read it and convet it into a javascript object
app.use(express.json());

//GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//Javascript post 

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "PLease provide the credentials" });
  }
  res.status(201).json({ success: true,person: name  });
});

//POST
app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log("name", name); //Rajal
  console.log(req.body); //{ name: 'Rajal'}
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  //no name
  res.status(401).send("please provide credentials");
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
