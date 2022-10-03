/* Importing the Sequelize class from the sequelize module. */
const Sequelize = require("sequelize");

/* Create connection */
const db = new Sequelize("miniblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/* Testing Connection are you working  */
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

/* Exporting the db object so that it can be used in other files. */
module.exports = db;
