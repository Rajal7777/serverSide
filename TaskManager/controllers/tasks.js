//// CONTROLLER: Handles the logic for tasks
/**
 * GET Function: Fetches all tasks.
 * 'req' (Request) = Data coming in from the user's browser.
 * 'res' (Response) = Object used to send data back to the browser.
 */

// GET /api/v1/tasks {for getting all tasks}

const getAllTasks = (req, res) => {
  res.send("all tasks");
};

module.exports = {
  getAllTasks,
};
