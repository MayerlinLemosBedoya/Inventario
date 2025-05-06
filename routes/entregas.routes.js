const express =require("express")
const router= express.Router()

const entregasController=require("../controllers/entrega.controllers")
router.get("/",entregasController.leerEntregas)
router.post("/",entregasController.crearEntrega)

module.exports= router