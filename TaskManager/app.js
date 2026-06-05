const express = require('express');
require('./db/connect');
const app = express();
const tasks = require('./routes/tasks');

//routes
app.get('/home', (req, res) => {
    res.send('Welcome to the hood!')
})

//to make our express app understand json data coming in from the client, we need to use this middleware. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

app.use('/api/v1/tasks', tasks);

const Port = 4000;

app.listen(Port, () => {
    console.log(`server is listening on port ${Port}...`);
});