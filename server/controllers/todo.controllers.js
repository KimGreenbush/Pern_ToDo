const Todo = require("../models/todo.model")

module.exports.allTodos = async (req, res) => {
	try {
		const todos = await Todo.findAll()
		res.json(todos)
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.createTodo = async(req, res) => {
	try {
		const { description } = req.body
		const newTodo = await Todo.create({ description: description })
		console.log(newTodo.description)
		res.json(newTodo)
    } catch (err) {
        console.error(err.message)
    }
}

module.exports.oneTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await Todo.findByPk(id)
		// use with specific column searches vvv
		// const todo = await Todo.findOne({ where: { id: id } })
		res.json(todo);
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.updateTodo = async (req, res) => {
	try {
		const { id } = req.params
		const { description } = req.body
		const updateTodo = await Todo.update({ description: description }, {where: { id: id } })
		res.json(updateTodo)
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.deleteTodo = async (req, res) => {
	try {
		const { id } = req.params
		await Todo.destroy({ where: { id: id } })
		res.json(`Todo ${id} was deleted`)
	} catch (err) {
		console.error(err.message)
	}
}