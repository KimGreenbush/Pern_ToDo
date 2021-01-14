const express = require("express")
const app = express()
const cors = require("cors")

//DB connection

app.use(cors())
app.use(express.json())

//routes
require("./routes/todo.routes")(app)

app.listen(8001, () => {
    console.log("server has started on port")
})