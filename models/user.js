const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Users = db.define("users", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Users;
