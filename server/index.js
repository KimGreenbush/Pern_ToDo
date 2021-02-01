const express = require("express")
const app = express()
const cors = require("cors")

//DB connection
// require("./models/todo.model")
require("./config/sequelize.config")
app.use(cors())
app.use(express.json())

//routes
require("./routes/todo.routes")(app)

app.listen(8001, () => {
    console.log("Server has started on port 8001")
})