// let's assume that a data is comming from there

exports.getAllData = (req,res)=>{
    res.json({type:"get"})
}

exports.createAData = (req,res)=>{
   res.json({type:"post"})
}

exports.updateData = (req,res)=>{
   res.json({type:"put"})
}

exports.deleteData = (req,res)=>{
   res.json({type:"delete"})
}