const express = require("express");
const router = express.Router();

// Import the specific function we created in the controllers folder
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// When a user makes a HTTP 'GET' request here, fire the 'getAllTasks' logic.
router.route("/").get(getAllTasks);
router.route("/:id").get(getTask);
router.route("/").post(createTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);
module.exports = router;
