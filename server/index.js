const express = require('express');
const cors = require('cors');
const pool = require('db')
const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(PORT, () => {console.log(`Server has started on port ${PORT}`);})

module.exports = {PORT}