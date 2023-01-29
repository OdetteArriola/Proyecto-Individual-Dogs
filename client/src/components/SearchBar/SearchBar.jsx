// import styles from "./SearchBar.module.css";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getDogsByName } from "../../redux/actions";


import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Por favor, inserte un nombre para la receta");
    } else {
      dispatch(getDogsByName(name.toLocaleLowerCase()));
      setName("");
    }
  }

  return (
    <div>
      <input
        id="inputName"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="buttonSearch"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
}









// const SearchBar = () => {
//     const [dogState, setDogsState] = useState("");
//   const dispatch = useDispatch();

//   function handleClick(e) {
//     e.preventDefault();
    
//     if (dogState.length === 0) {
//       return alert("Please input a name to start the search");
//     } else {
//       dispatch(getDogsByName(dogState));
//       setDogsState("");
//     }}
  
//     return (
//         <div >
//           <input
//             type="text"
//             placeholder="Search a dog..."
            
//             value={dogState}
//             onChange={(e) => setDogsState(e.target.value)}
//           />
//           <button type="submit" onClick={handleClick}>
//             <span>search</span>
//           </button>
//         </div>
//     );
// }


// export default SearchBar;








// export default function SearchBar() {
//   const [dogState, setDogsState] = useState("");
//   const dispatch = useDispatch();

//   function handleClick(e) {
//     e.preventDefault();
    
//     if (dogState.length === 0) {
//       return alert("Please input a name to start the search");
//     } else {
//       dispatch(getDogsByName(dogState));
//       setDogsState("");
//     }
// //   }

//   return (
//     <div className={styles.searchBarObject}>
//       <input
//         type="text"
//         placeholder="Search a dog..."
//         className={styles.input}
//         value={dogState}
//         onChange={(e) => setDogsState(e.target.value)}
//       />
//       <button type="submit" onClick={handleClick}>
//         <span className="material-icons">search</span>
//       </button>
//     </div>
//   );
// }