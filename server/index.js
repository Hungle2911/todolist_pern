// load .env data into process.env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pool = require('./db')
const app = express();
const PORT = process.env.PORT || 5200;

//Middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo
app.post('/todos', async (req, res) => {
  try {
    const { note } = req.body;
    const newTodo = await pool.query('INSERT INTO todos(note) VALUES ($1) RETURNING *', [note])
    // console.log(newTodo.rows);
    res.json(newTodo.rows[0]);
  } catch (err){
    console.error(err.message);
  }
})
//get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todos');
    res.json(allTodos.rows)
  } catch (err){
    console.error(err.message);
  }
})
//get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const {id} = req.param;
    const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id])
    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})
//update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const { note } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todos SET note = $1 WHERE id = $2",
      [note, id]
    );

    res.json("Todo was updated!");
  } catch (error) {
    console.error(error.message);
  }
})

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(PORT, () => {console.log(`Server has started on port ${PORT}`);})

module.exports = {PORT}