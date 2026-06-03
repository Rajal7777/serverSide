const express = require('express');

const app = express();
const tasks = require('./routes/tasks');

//routes
app.get('/home', (req, res) => {
    res.send('Welcome to the hood!')
})

app.use('/api/v1/tasks', tasks);

const Port = 4000;

app.listen(Port, () => {
    console.log(`server is listening on port ${Port}...`);
});