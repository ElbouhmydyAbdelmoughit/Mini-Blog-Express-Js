let Sequelize = require('sequelize')
let db = require('../config/db')
const Categorie = db.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
module.exports = Categorie;

