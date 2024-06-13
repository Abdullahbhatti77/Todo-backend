const express=require('express');
const router=express.Router();
const {createTodo,getTodos, deleteTodo, updateTodo}=require('../Controllers/todo')

router.get('/getTodo', getTodos)
router.post('/createTodo', createTodo)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports={router}