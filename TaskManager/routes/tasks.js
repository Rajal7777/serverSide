const express = require('express');
const router = express.Router();

// Import the specific function we created in the controllers folder
const { getAllTasks } = require('../controllers/tasks');

// When a user makes a HTTP 'GET' request here, fire the 'getAllTasks' logic.
router.route('/').get(getAllTasks);

module.exports = router;