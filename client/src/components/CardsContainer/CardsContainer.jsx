import React from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css"
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";

const CardsContainer = () => {
	const dispatch = useDispatch();
    const dogs = useSelector((state) => state.dogs) 
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState (8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog,indexOfLastDog);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

  
    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);


    return(
        <div className={styles.container}>
             <Pagination 
                dogsPerPage={dogsPerPage}
                dogs={dogs.length}
                pagination={pagination}
                currentPage={currentPage}
            />
         <div className={styles.pagination}></div>
            {
            currentDogs.map(dog => {
                return <Card
                    key={dog.id}
					id={dog.id}
                    name={dog.name}
                    image={dog.image}
                    temperament={dog.temperament}
                    weight_min={dog.weight_min}
                    weight_max={dog.weight_max}
                    createInDB={dog.createInDB}
                />
				})} 
        </div>
    )
}

export default CardsContainer;

