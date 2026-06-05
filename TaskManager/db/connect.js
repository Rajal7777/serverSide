const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://suwalrajal57:Reckon2utron22@cluster0.1wswpuz.mongodb.net/TaskManager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
