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
      .status(404)
      .json({ success: false, msg: "PLease provide the credentials" });
  }
  res.status(200).json({ success: true, person: name });
});

//Test Post
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(404).json({ success: false, msg: "Please provide name" });
  }

  res.status(200).json({ success: true, data: [...people, name] });
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
  res.status(404).send("please provide credentials");
});

//PUT
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  //check if person with id exists
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  //if id matches then change the key value and return the new array with updated value
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = { ...person, name };
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

//Delete
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "Can not find the user" });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  //  { return person.id !== Number(req.params.id);});

  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
