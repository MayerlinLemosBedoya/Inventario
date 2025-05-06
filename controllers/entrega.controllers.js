const { default: entregaModel, default: entregasModel} = require("../models/entregas.model")
exports.leerEntregas = async(req,res)=>{
    try{
       const entregas=await entregaModel.find({})
      return  res.status(200).json(entregas)   
    } catch (error){
        console.error(error)
        return res.status(500).send(error)
    }
}

exports.crearEntrega= async (req,res)=>{
     try{
      const entrega= new entregasModel(req.body)
      await entrega.save()
      return res.status(201).json(entrega)
     } catch (error){
        console.error(error)
        return res.status(500).send(error)
     }
}

