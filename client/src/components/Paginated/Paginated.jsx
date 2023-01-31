import React from "react";
import styles from "./Paginated.module.css";

export default function Paginated ({dogsPerPage, dogs, paginated, currentPage}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(dogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles.paginated}>
                 {pageNumbers && 
                 pageNumbers.map(number => (
                   <li className={styles.number} key={number}>
                   <a onClick={() => paginated(number)}>{number}</a>
                   </li>
                ))}
            </ul>
        </nav>
    )
}

