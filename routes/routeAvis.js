let express = require('express');
const { addAvis, findAvis, findAllAvis, deleteAvis } = require('../controlleurs/AvisControoler');
let Router = express.Router()


Router.post('/addAvis',addAvis)

Router.get('/showAvis',findAvis)


Router.get('/showAllAvis',findAllAvis)


Router.delete('/deleteAvis',deleteAvis)




module.exports = Router;