let Sequelize = require('sequelize')
let db = require('../config/db')
const Avis = db.define('avis', {
    avis: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})
module.exports = Avis;

