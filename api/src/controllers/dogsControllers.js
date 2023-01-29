const axios = require("axios");
const e = require("express");
const { Dog } = require("../db");


const cleanArray = (arr) => {
    const clean = arr.map(e => {
        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            temperament: e.temperament,
            weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
            weight_max: parseInt(e.weight.metric.slice(4).trim()),
            height_min: parseInt(e.height.metric.slice(0, 2).trim()),
            height_max: parseInt(e.height.metric.slice(4).trim()),
            createInDB: false,

        }
    })
    return clean;
}

const createDog = async(
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    temperament) => {
    return await Dog.create({
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperament
        })
    }

const getDogById = async (id, source) => {
    const dog = source === "api" 
    ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`))
    .data
    : await Dog.findByPk(id);

    return dog;
}



const searchDogByName = async (name) => {
    const databaseDogs = await Dog.findAll({ where: { name: name  }}
    )
    const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    const apiDogs = cleanArray(apiDogsRaw);
    
    const filteredApi = apiDogs.filter((dog) => dog.name === name);

    return [...filteredApi, databaseDogs];
}





const getAllDogs = async () => {
    const databaseDogs = await Dog.findAll()

    const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
   
    const apiDogs = cleanArray(apiDogsRaw)

    return  [...databaseDogs, ...apiDogs];
}

module.exports = { createDog, getDogById, searchDogByName, getAllDogs };