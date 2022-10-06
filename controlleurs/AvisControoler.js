

const addAvis = async (req,res)=>{
    res.send('add avis mzyana ')
}


const findAvis = async (req,res)=>{
    res.send('find avis mzyana ')
}

const findAllAvis  = async (req,res)=>{
    res.send('fin all mzyana ')
}

const deleteAvis = async (req,res)=>{
    res.send('delete mzyana')
}


module.exports={
    addAvis,
    findAvis,
    findAllAvis,
    deleteAvis
}