const { createDog, getDogById, searchDogByName, getAllDogs } = require("../controllers/dogsControllers");


const getDogsHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchDogByName(name) : await getAllDogs()

    res.status(200).json(results);

};


///ORIGINAL
// const getDogHandler = async (req, res) => {
//     const { id } = req.params;

//     const source = isNaN(id) ? "bdd" : "api";

//     try{
//         const dog = await getDogById(id, source);
//         res.status(200).json(dog);
//     } catch (error){
//         res.status(400).json({ error: error.message })
//     }
// };


///JORGE
// const getDogHandler = async (req, res) => {
//     /* http://localhost:3001/dogs/7 */
//     try {
//       const { id } = req.params;
//       const allDogs = await getAllDogs();
//       if (!id) {
//         res.status(404).json("Couldn't find the name on DBase");
//       } else {
//         const dog = allDogs.find((dogui) => dogui.id.toString() === idRaza);
//         res.status(200).json(dog);
//       }
//     } catch (error) {
//       res.status(404).send(error);
//     }
//   };


  ///AGUS
  const getDogHandler = async (req, res) => {
    const id = req.params.id;
    try {
      let allDogs = await getAllDogs();
      if (id) {
        let dogsById = allDogs.filter((e) => e.id == id);
        dogsById.length
          ? res.status(200).json(dogsById)
          : res.status(404).send("Doesn't exist");
      } else {
        res.status(400).send("Sorry, couldn't find the dog");
        
      }
    } catch (error) {
      res.status(400).send("Error");
    }
  };
















const createDogHandler = async (req, res) => {
    const {name, height_min, height_max, weight_min, weight_max, life_span, temperament, image } = req.body;
    try {
        // Tipo de validación, revisar video 3 minuto 1:45:00
        // if(!name || height_min || !height_max || !weight_min || !weight_max || !life_span || !temperament || !image) throw Error("Missing data");
        const newDog = await createDog(
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span,
            temperament,
            image,
            )
            res.status(201).json("El nuevo perrito ha sido creado")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getDogsHandler,
    getDogHandler,
    createDogHandler
};