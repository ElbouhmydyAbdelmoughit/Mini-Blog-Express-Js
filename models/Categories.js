const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Categories = db.define("Categories", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Categories;
