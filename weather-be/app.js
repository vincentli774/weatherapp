const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
let cities = []; // In-memory storage for cities

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.post("/cities", (req, res) => {
  const city = req.body["city"];
  cities.push(city);
  res.status(201).json(city);
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});