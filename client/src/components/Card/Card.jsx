import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({id, name, image, temperament, temperaments, weight_min, weight_max }) => {

    if (!temperaments) {
        return (
        
            <div className={styles.dogCard}>
            <Link to={"/dogs/" + id}>
                <div className={styles.titleArea}>
                <h4 className={styles.dogName}>{name}</h4>
                </div>
                <div className={styles.infoArea}>
                <div className={styles.tempArea}>
                    {temperament ? (
                    <h5 className={styles.dogTemp}>{temperament}</h5>
                    ) : (
                    <br />
                    )}
                </div>
                <div className={styles.imageArea}>
                    <img
                    className={styles.dogImage}
                    src={image}
                    alt={`A dog wich is ` + { temperament }}
                    height="140px"
                    />
                </div>
                </div>
            </Link>
            </div>
      
        );
    } else {
        return (
       
            <div className={styles.dogCard}>
            <Link to={"/dogs/" + id}>
                <div className={styles.titleArea}>
                <h4 className={styles.dogName}>{name}</h4>
                </div>
                <div className={styles.infoArea}>
                <div className={styles.tempArea}>
                    {temperaments ? (
                    <h5 className={styles.dogTemp}>
                        {temperaments.map((temp) => `${temp.name} `).join(', ')}
                    </h5>
                    ) : (
                    <br />
                    )}
                    <h5 className={styles.infoArea}>{weight_min}</h5>
                    <h5 className={styles.infoArea}>{weight_max}</h5>
                </div>
                <div className={styles.imageArea}>
                    <img
                    className={styles.dogImage}
                    src={image}
                    alt={`A dog`}
                    height="140px"
                    />
                </div>
                </div>
            </Link>
            </div>
    
       );
      }
    }











//     return(
//         <Link to={`/recipe/${id}`} >
//             <div className={styles.card}>
//                 <p className={styles.title}>Name:{name}</p>
//                 <div className={styles.image}> 
//                     <img src={image} alt={name} height= '250px' width='200px'/>
//                 </div>
//                 <p>Image:{image}</p>
//                 <p>Temperament:{temperament}</p>
//                 <p>Weight min:{weight_min}</p>
//                 <p>Weight max:{weight_max}</p>
//             </div>
//         </Link>
//     )
// }

export default Card;





  