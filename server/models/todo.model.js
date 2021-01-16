const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/perntodo");

const Todo = sequelize.define("Todo", {
	uuid: {
		type: DataTypes.UUID,
		defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	}
})

	console.log(Todo)
	console.log(sequelize.models.Todo)