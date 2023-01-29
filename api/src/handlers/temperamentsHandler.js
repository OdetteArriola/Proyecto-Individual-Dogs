const { default: axios } = require("axios");
const { getTemperaments } = require("../controllers/temperamentsControllers");
const { Temperament } = require("../db");

const getTemperamentsHandler = async (req, res) => {
    try {
        await getTemperaments()
        const allTemperaments = await Temperament.findAll()
        res.json(allTemperaments)
    
    } catch (error){
        res.status(400).json({ error:error.message })
    }
}

module.exports = {getTemperamentsHandler};


