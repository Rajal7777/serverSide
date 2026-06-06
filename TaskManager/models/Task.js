const mongoose = require("mongoose");

//structure of the document in the collection
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//export mongoose model in a Node.js environment
//model name: Task is the name of folder of data collection in the database
module.exports = mongoose.model("Task", TaskSchema);
