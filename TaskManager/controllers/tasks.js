//// CONTROLLER: Handles the logic for tasks
/**
 * GET Function: Fetches all tasks.
 * 'req' (Request) = Data coming in from the user's browser.
 * 'res' (Response) = Object used to send data back to the browser.
 */

// GET /api/v1/tasks {for getting all tasks}
const Task = require("../models/Task");

//Get all task
const getAllTasks = async (req, res) => {
  try {
    //get all the tasks via mongoose query find method
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
    res.status(200).json({ status: "success", 
      data: {tasks, nbHits: tasks.length } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Create Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Get single Task
const getTask = async (req, res) => {
  try {
    // Extract the task ID from the URL parameters
    const { id: taskID } = req.params; //Destructure and rename the 'id' parameter to 'taskID'
    const task = await Task.findOne({ _id: taskID });
    //if no task found
    if (!task) {
      return res.status(404).json({ msg: `No task found with id : ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//UPDATE Task
const updateTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on the update
    });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });

    if (!task) {
      return res.status(404).json({ msg: `No task found with id : ${TaskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
