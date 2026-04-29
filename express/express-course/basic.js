const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User hit the page");
  res.status(200).send("Welcome to home page");
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>')
// })

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

