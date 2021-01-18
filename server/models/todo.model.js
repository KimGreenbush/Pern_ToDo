const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/perntodo")

module.exports.Todo = sequelize.define("Todo", {
	description: {
		type: DataTypes.STRING,
		allowNull: false
	}
})