let Sequelize = require('sequelize')
let db = require('../config/db')
const Comment = db.define('comment', {
    contenue: {
        type: Sequelize.TEXT,
        allowNull: false,
    },

})
module.exports = Comment;

