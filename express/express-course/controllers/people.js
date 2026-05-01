const path = require("path");

const { people } = require("../../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  console.log(req.body)

  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please provide a name",
    });
  }
  res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please provide a name",
    });
  }

  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  //check if person with id exists
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id ${id}`,
    });
  }

  //if id matches then change the key value and return the new array with updated value
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      //   person.name = name;
      return { ...person, name };
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person with id ${req.params.id}`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
