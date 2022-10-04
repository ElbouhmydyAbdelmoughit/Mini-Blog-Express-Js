const Sequelize = require("sequelize");
const db = new Sequelize("miniblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/* Connecting to the database. */
db.authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    (error) => console.log(" Database Not Connected " + error);
  });

module.exports = db;
