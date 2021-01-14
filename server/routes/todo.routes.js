const todoController = require("../controllers/todo.controller.js")

module.exports = app => {
    // display all
    app.get("/api/todos", todoController.allTodos)
    // app.get("/todos", async(req, res) => {
    //     try {
    //         const allTodos = await pool.query("SELECT * FROM todo")
    //         res.json(allTodos.rows)
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // })

    //create
    app.post("/api/todos", todoController.createTodo)
    // app.post("/todos", async(req, res) => {
    //     try {
    //         const {description} = req.body
    //         const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
    //         res.json(newTodo.rows)
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // })

    // get one
    app.get("/api/todos/:id", todoController.oneTodo)
    // app.get("/todos/:id", async(req, res) => {
    //     try {
    //         const { id } = req.params
    //         const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    //         res.json(todo.rows)
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // })

    //update
    app.put("/api/todos/:id", todoController.updateTodo)
    // app.put("/todos/:id", async (req, res) => {
    //     try {
    //         const { id } = req.params
    //         const { description } = req.body
    //         const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
    //         res.json("Todo was updated")
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // })

    // delete
    app.delete("/api/todo/:id", todoController.deleteTodo)
    // app.delete("/todo/:id", async (req, res) => {
    //     try {
    //         const { id } = req.params
    //         const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    //         res.json("Todo was deleted")
    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // })
}