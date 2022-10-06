const comment = require('../models/comment')

const addCmnt = async (req,res)=>{
    res.send('add comment mzyana ')
}

const schow = async (req,res)=>{
    res.render('cmnt')
}

const schowAll = async (req,res)=>{
    res.render('cmnt')
}
const UpdateCmnt = async (req,res)=>{
    res.render('cmnt')
}

const deleteCmnt = async(req,res)=>{
    res.send('delete cmnt mzyana ')
}
module.exports={
    addCmnt,
    schow,
    deleteCmnt,
    schowAll,
    UpdateCmnt
}