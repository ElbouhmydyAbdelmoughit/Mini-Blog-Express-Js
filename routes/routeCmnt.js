let express = require('express')
const { addCmnt, deleteCmnt, schow, schowAll, UpdateCmnt } = require('../controlleurs/comentContrroleur')
let Router= express.Router()




Router.post('/addCmnt',addCmnt)
Router.get('/findCmnt',schow)
Router.get('/findAllCmnt',schowAll)
Router.put('/updateCmnt',UpdateCmnt)
Router.delete('/deleteCmnt',deleteCmnt)


module.exports= Router; 