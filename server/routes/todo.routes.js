const todoController = require("../controllers/todo.controllers")

module.exports = app => {
    // get all
    app.get("/api/todos", todoController.allTodos)

    //create
    app.post("/api/todos", todoController.createTodo)

    // get one
    app.get("/api/todos/:id", todoController.oneTodo)

    //update
    app.put("/api/todos/:id", todoController.updateTodo)

    // delete
    app.delete("/api/todos/:id", todoController.deleteTodo)
}