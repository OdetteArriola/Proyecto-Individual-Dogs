const axios = require("axios");
const e = require("express");
const { Temperament } = require("../db");
const { API_KEY } = process.env;



const getTemperaments = async () => {
    let allData = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    allData.data.forEach((p) => {
        const temperament = p.temperament?.split(", ")
        temperament?.forEach((t) => {
            Temperament.findOrCreate({ where:{name:t}})
        })
    })}
       
    
    
   

module.exports = { getTemperaments };
