import React from "react";
import { useState, useEffect } from "react";
import  { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom"
import { getDogs, createDog, getDogsByName, getDetail, getTemperaments, filterCreated, filterTemperaments, orderByWeight, orderByName, GET_DETAIL } from "../../redux/actions";
import styles from "./CardsContainer.module.css";
import Paginated from "../Paginated/Paginated";

const CardContainer = () => {

    const dispatch = useDispatch()
    const dogs = useSelector((state) => state.dogs);
    const temperaments = useSelector((state) => state.temperaments);
   

    //Variables para paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
    const paginated = (pageNumber) => {setCurrentPage(pageNumber)}; 

    //Variables para ordenamiento
    const [orden, setOrden] = useState("");

   
    /// para que se reinicie la home automaticamente según Selene
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getDogs)
    };


    ///Me trae del estado la información cuando el componente se monta
        useEffect(() => {
            dispatch(getDogs());
        }, [dispatch]);
    

    ///Handler del filtro creado en API/DB
    const handleFilterCreated = (e) => {
        dispatch (filterCreated(e.target.value))
    }

    ///Handler del filtro Temperaments
    function handleFilterTemperaments(e) {
        dispatch(filterTemperaments(e.target.value));
      }

    ///Ordenamiento por nombre
    function handleSortName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    
    function handleSortWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
        
    }
    
    


    console.log(getDetail(5));



    return (
        //////Esto se lo añadí viendo la clase de selene, es para uqe la página se resetee , 
        ///TAMBIÉN EL HANDLER DE AQUÍ ARRIBA SEGUN YO ESTO YA VA INCLUIDO EN LA NAVBAR PERO LO HAGO POR SI ACASO, 
        /// SI NO ME SIRVE HAY QUE BORRAR TRES COSAS, EL HANDLECLICK, EL DIV Y EL BUTTON
        <div>
            <button onClick={e=> {handleClick(e)}}>VOLVER A CARGAR PERSONAJES</button>
            {/* ///////estos son los filtros!!!  */}
            
            {/* Aquí comienzan los filtros
            Alfabético */}
            <div>
                <select onChange={(e) => handleSortName(e)}>
                    <option>Alphabetic order</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>


            <div>
                <select defaultValue="Temperaments" onChange={(e) => handleFilterTemperaments(e)}>
                    <option value="Temperaments" disabled selected>Temperaments</option>
                    <option value="all">All</option>
                    
                    {temperaments.map((el) => {
                       <option key={el} value={el}>
                    {" "}
                    {el.name}
                    </option>
                    })}
                </select>
            </div>
            

        {/* Filtro por API/Database */}

            <div>
                <select onChange={(e) => handleFilterCreated(e)}>
                    <option>
                        Database/Api
                    </option>
                    <option value= "all">All</option>   
                    <option value= "database">Created</option>
                    <option value= "api">Existent</option>
                </select>
            </div>


             <div>
                <select onChange={(e) => handleSortWeight(e)}>
                    <option>Weight</option>
                    <option value="min">Weight Min</option>
                    <option value="max">Weight Max</option>
                </select >
            </div>
           
        {/* Paginado */}
           <div>
           <div className={styles.paginated}> 
            <Paginated 
            
                dogsPerPage={dogsPerPage}
                dogs={dogs.length}
                paginated={paginated}
                currentPage={currentPage}
            />
            </div>
            </div>
            

            <div className={styles.container}>
                {currentDogs.map(dog => {
                    console.log(dog)
                    return <Card 
                    key={dog.id}
                    id={dog.id} 
                    name={dog.name} 
                    image={dog.image} 
                    temperament={dog.temperament} 
                    weight_min={dog.weight_min} 
                    weight_max={dog.weight_max}
                    life_span={dog.life_span}
                />
                    
                })}
                  
                </div>
        </div>
        
    )
};


export default CardContainer

