const Todo = require("../Models/todo");

async function createTodo(req, res) {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  return res.status(201).json(todo);
}

async function getTodos(req, res) {
  const todos = await Todo.find();
  return res.status(200).json(todos);
}

async function updateTodo(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while updating the todo' });
  }
}

async function deleteTodo(req, res) {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  return res.status(204).json();
}

module.exports = { createTodo, getTodos, deleteTodo,updateTodo };
