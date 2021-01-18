const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("postgres://postgres:root@localhost:5432/perntododb", { logging: (...msg) => console.log(msg)})

// DB Connection test
async function connect() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established by Sequelize");
	} catch (error) {
		console.log("Connection error", error);
	} finally {
		sequelize.close();
	}
}
connect()