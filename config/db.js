let Squelize = require('sequelize')

let db = new Squelize("blog","root","",{dialect : "mysql",
    host : "localhost"
})

db.authenticate().then(()=>{console.log("db mzyana  ")}).catch((error)=>{console.log("db not mzyana")})

module.exports = db;