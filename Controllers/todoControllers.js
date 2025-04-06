const Todo =require('../models/Todo');
exports.getTodos = async (req, res) =>{
    const todos = await Todo.find();
    res.json(todos);
};

exports.createTodo = async(req, res) =>{
    const todo = new Todo({text:req.body.text});
    await todo.save();
    res.json();
};
exports.deleteTodo = async (req, res) =>{
    await
    Todo.findByIdAndDelete(req.parems.id);
    res.json({message:'Deleted'});
};