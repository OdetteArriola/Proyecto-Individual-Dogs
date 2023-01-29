import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { getDogs } from "../../redux/actions";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";


const NavBar = () => {

   

    const dispatch = useDispatch();

    return(
        <div className={styles.navbar}>
            <div>
                <Link to="/home">
//                     <button className={styles.navbar_boton1}>HOME</button>
//              </Link>
            </div>
            <div>
                <Link to="/create">
                    <button className={styles.navbar_boton2}>CREATE DOG</button>
                </Link>
            </div>
            <div className={styles.navbar_boton3}>
                <SearchBar />
            </div>
       
          
        </div>
    )
}

export default NavBar;



// /// para que se reinicie la home automaticamente según Selene
// const handleClick = (e) => {
//     e.preventDefault()
//     dispatch(getDogs)
// };

// <div>
//             <button onClick={e=>{handleClick(e)}} className={styles.navbar_boton}>VOLVER A CARGAR LOS PERRITOS</button>
//                 <Link to="/home">
//                     <button className={styles.navbar_boton1}>HOME</button>
//                 </Link>
//             </div>