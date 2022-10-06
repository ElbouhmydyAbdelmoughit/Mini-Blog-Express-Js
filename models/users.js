let Sequelize = require('sequelize')
let db = require('../config/db')
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
module.exports = User;

