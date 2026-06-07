const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//to make our express app understand json data coming in from the client, we need to use this middleware. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("./public"));

//middleware
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const Port = 4000;
// console.log(process.env.MONGO_URI);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`server is listening on port ${Port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
