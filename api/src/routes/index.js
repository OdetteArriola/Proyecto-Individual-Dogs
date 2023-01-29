const { Router } = require('express');
// Importar todos los routers;
const temperamentsRouter = require("./temperamentsRouter");
const dogsRouter = require("./dogsRouter");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentsRouter)


module.exports = router;
