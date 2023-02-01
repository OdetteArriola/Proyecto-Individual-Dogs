import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../../redux/actions";
import { useState } from "react";


const Detail = (props) => {
    console.log(props.match.params.id)  ;
    const dispatch = useDispatch();
    const myDog = useSelector ((state) => state.detail)
   
    console.log("sdfsfsdf", myDog)
    
    useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    }, [props.match.params.id])

  
    return (
        
       
        <>
        <h1>Breed: {myDog.name}</h1>
        <img src={myDog.image} alt="img not found"></img>
        <h1>Temperament: {myDog.temperament}</h1>
        <h1>Minimum weight: {myDog.weight_min} - Maximum weight: {myDog.weight_max}</h1>
        <h1>Minimum height: {myDog.height_min} - Maximum height: {myDog.height_min}</h1>
        <h1>Life span: {myDog.life_span}</h1>
        
        </> 
    )
}

export default Detail