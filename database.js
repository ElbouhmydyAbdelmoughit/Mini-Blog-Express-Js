const { Sequelize } = require("sequelize");

/* Creating a new instance of Sequelize. */
const sequelize = new Sequelize("miniblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
