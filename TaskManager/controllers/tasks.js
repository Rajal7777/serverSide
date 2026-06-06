//// CONTROLLER: Handles the logic for tasks
/**
 * GET Function: Fetches all tasks.
 * 'req' (Request) = Data coming in from the user's browser.
 * 'res' (Response) = Object used to send data back to the browser.
 */

// GET /api/v1/tasks {for getting all tasks}
const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    //get all the tasks via mongoose query find method
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.send("get single task");
};
const updateTask = (req, res) => {
  res.json({ id: req.params.id, ...req.body });
};
const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
