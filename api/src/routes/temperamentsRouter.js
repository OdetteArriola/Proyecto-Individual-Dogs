const { Router } = require("express");
const { getTemperamentsHandler } = require("../handlers/temperamentsHandler");
const router = Router();

//RUTA PARA MOSTRAR LOS TEMPERAMENTOS

router.get("/", getTemperamentsHandler);


module.exports = router