const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const db = require("../config/database.js");

const Articles = db.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false /* allowNull defaults to true */,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Articles;
