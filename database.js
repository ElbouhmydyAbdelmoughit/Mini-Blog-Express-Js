const { Sequelize } = require("sequelize");

/* Creating a new instance of Sequelize. */
const sequelize = new Sequelize("miniblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
