let Sequelize = require('sequelize')
let db = require('../config/db')

let Article = db.define('article',{
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },content: {
            type: Sequelize.STRING
        },author: {
            type: Sequelize.STRING
        },image: {
            type: Sequelize.STRING
        }
    })

    
module.exports = Article;
