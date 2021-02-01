const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/perntododb")

const Todo = sequelize.define("todo", {
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

async () => {
	await Todo.sync({ alter: true })
}

module.exports = Todo