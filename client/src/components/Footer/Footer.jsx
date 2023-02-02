import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <ul>
                <li>ADOPT, DON'T SHOP</li>
                <li><Link to="https://www.caninejournal.com/adopt-dont-shop/">Canine Journal</Link></li>
                <li><Link to= "https://www.petfinder.com/pet-adoption/dog-adoption/">Pet Finder</Link></li>
            </ul>   
                

            <ul>
            <li><Link to={"/"}>ODETTE ARRIOLA</Link></li>
                <li>DEVELOPER</li>
                <li>REDES</li>
            </ul>

            <ul>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Contact us</Link></li>
                <li><Link to={"/"}>Blog</Link></li>
            </ul>
        </div>
    )
}

export default Footer