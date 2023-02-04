const model = require ('../models/user')


exports.getData = async (req, res) =>{
    result= await model.find()

    return res.send(result)
}

exports.getbyid =async (req, res) => {
    
    try {
        const id=req.params.id
        const result= await model.findById(id)

        return res.send(result)
        
    } catch (error) {
        
        return res.send(error)

    }
}

exports.insertData = (req, res) => {
    const data =req.body
    model.create(data, (err, docs) => {
        res.send({data: docs })
    })

}

exports.update = (req, res) => {
    const data =req.body
    const id =req.params.id
    model.findByIdAndUpdate(id, data, (err, docs) => {
        res.send({data: docs })
    })

}

exports.delete = (req, res) => {
       const id =req.params.id
    model.findByIdAndDelete(id, (err, docs) => {
        res.send({data: docs })
    })

}



//exports.getData = (req, res) => {
  //  res.send({data:'Esto viene desde RUTA'})

//}