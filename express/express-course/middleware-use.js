const express = require("express");
const app = express();

const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/api/products', (req, res) => {
    res.send('products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('items');
})



app.listen(5000, () => {
  console.log("server listening at port 5000");
});
