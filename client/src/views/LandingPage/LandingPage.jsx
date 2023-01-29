import React from "react";
import { Link } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";

export default function LandingPage(){
    return(
        <div className={styles.landing}>
            <h1 className={styles.title}>Welcome to puppy finder</h1>
            <Link to="/home">
                <button className={styles.landingButton}>Do you want to learn more about puppies?</button>
            </Link>
        </div>
    )
}