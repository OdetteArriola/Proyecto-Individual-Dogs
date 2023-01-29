const { Router } = require("express");
const {getDogsHandler,getDogHandler,createDogHandler} = require("../handlers/dogsHandlers");
const router = Router();




//RUTA PARA MOSTRAR TODOS LOS PERROS
router.get("/", getDogsHandler); 

//RUTA PARA TRAER PERRITOS POR ID
router.get("/:id", getDogHandler);

//RUTA PARA CREAR PERRITO
router.post("/", createDogHandler);


module.exports = router