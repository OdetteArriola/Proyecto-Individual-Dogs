import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, temperament, weight_min, weight_max }) => {
    return(
        <>
        <div>
            
           
            <h4>{name}</h4>
            <div>
           <Link to={`/ruta/${id}`}><img src={image} alt={name} height="140px"/> </Link>
            </div>
            <div>Temperament:{temperament}</div>
            <div>
                Weight min: {weight_min}-   
                Weight max: {weight_max} 
            </div>
               
           
        </div>
        </>
    )
};


export default Card;

  