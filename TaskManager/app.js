const express = require('express');

const app = express();

//routes
app.get('/home', (req, res) => {
    res.send('Welcome to the hood!')
})

const Port = 4000;

app.listen(Port, () => {
    console.log(`server is listening on port ${Port}...`);
});