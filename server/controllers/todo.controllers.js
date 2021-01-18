// const pool = require("../db")
const Todo = require("../models/todo.model")

module.exports.allTodos = async (req, res) => {
	try {
		const todos = await Todo.findAll()
		// const allTodos = await pool.query("SELECT * FROM todo")
		// res.json(allTodos.rows)
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.createTodo = async(req, res) => {
	try {
		const { description } = req.body
		const newTodo = await Todo.create({ description: description })
		console.log(newTodo.description)
		console.log(newTodo.toJSON)
        // const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        // res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

module.exports.oneTodo = async (req, res) => {
	try {
		const { id } = req.params
		const todo = await Todo.findByPk(id)
		// const todo = await Todo.findOne({ where: { uuid: id } })
		console.log(todo.id)
		// const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
		// res.json(todo.rows[0])
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.updateTodo = async (req, res) => {
	try {
		const { id } = req.params
		const { description } = req.body
		const updateTodo = await Todo.update({ description: description, where: { id: id } })
		console.log(id)
		console.log(updateTodo.id)
		// const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
		// res.json("Todo was updated")
	} catch (err) {
		console.error(err.message)
	}
}

module.exports.deleteTodo = async (req, res) => {
	try {
		const { id } = req.params
		await Todo.destroy({ where: { id: id } })
		// const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
		// res.json("Todo was deleted")
	} catch (err) {
		console.error(err.message)
	}
}