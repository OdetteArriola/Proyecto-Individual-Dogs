
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteDetails, getDetails } from "../../redux/actions";

// const Detail = (props) => {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getDetails(props.match.params.id));
//         return () => dispatch(deleteDetails());
//     }, [dispatch, props.match.params.id]);

//     const myDog = useSelector((state) => state.details);






//     return(
//         <div>
           
 
//       {myDog ? (
//         <div key={myDog.id}>
//           <div>
//             <h2>{myDog.name}</h2>
//             <img src={myDog.image} alt={myDog.name}/>
//             <div>
//               {myDog.breed_group ? (
//                 <div >
//                   <div>
                    
//                   </div>
//                   <div>
//                     <h3>Breed group: </h3>
//                     <p>{myDog.breed_group}</p>
//                   </div>
//                 </div>
//               ) : (
//                 ""
//               )}
//               <div>
//                 <div>
                
//                 </div>
//                 <div>
//                   <h3>Life span: </h3>
//                   <p>{myDog.life_span}</p>
//                 </div>
//               </div>
//               <div>
//                 <div>
               
//                 </div>
//                 <div>
//                   <h3>Weight: </h3>
//                   <p>Min: {myDog.weight_min}</p>
//                   <p>Max: {myDog.weight_max}</p>
//                 </div>
//               </div>
//               <div>
//                 <div>
                
//                 </div>
//                 <div>
//                   <h3>Height: </h3>
//                   <p>Min: {myDog.height_min}</p>
//                   <p>Max: {myDog.height_max}</p>
//                 </div>
//               </div>
//               <br />
//               <div>
//                 <div>
//                   {
//                     <div>
//                       <h3>Temperament: </h3>
//                       <p>
//                         {myDog.createdInDB
//                           ? myDog.temperaments.map((el) => el.name).join(", ")
//                           : myDog.temperament}
//                       </p>
//                     </div>
//                   }
//                 </div>
//               </div>
//             </div>
//             <Link to="/home">
//               <button>Back</button>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//         </div>
//     )
// }

// export default Detail;







// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getDetails } from "../../redux/actions";


// export default function Detail(props){
//   const dispatch = useDispatch();
//   const breedId = useSelector((state) => state.breedsDetail)
  
//   useEffect(()=> {
//       dispatch(getDetails(props.match.params.id))
//   }, [dispatch, props.match.params.id])
//   console.log(breedId)
//   return (
//       <div >   
//           <div >
//               <Link to="/home">
//                   <button>Home</button>
//               </Link>
//               <Link to="/newBreed">
//                   <button>Create Breed</button>
//               </Link>
//           </div>         
//               {breedId.length === 0 ? (
//               <div>aquí iba una imagen </div>) : 
//               (                     
//               <div>
//               {breedId.map(breedId => {  
//                   return( 
//                   <div key={breedId.id}>                     
//                       <img src={breedId.image} alt='img'/>   
//                       <h3>Name: {breedId.name}</h3>    
//                       <div><h4>Weight:</h4> <p>Min: {breedId.weightMin}/kg - Max: {breedId.weightMax}/kg</p></div>
//                       <div><h4>Height:</h4> <p>Min: {breedId.heightMin}/cm - Max: {breedId.heightMax}/cm</p></div>
//                       <div><h4>Life-Span:</h4><p>Min: {breedId.life_span_min} - Max: {breedId.life_span_max}</p></div>
//                       <div><h4>Temperaments:</h4><p>{breedId.temperament}</p></div>
//                   </div>
//                    )})}
//            </div> 
            
          
//   )} 
//       </div>
// )
// }






///////////////corregir esta que hice ayer coin el video de Selene--------------------------------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { getDetail, deleteDetails, removeDog } from "../../redux/actions";
// import { useEffect } from "react";


// export default function Details(props) {
//   console.log("PROPIEDADES", props);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getDetails(props.match.params.id));
//     dispatch(removeDog());
//     //DESMONTA
//     return () => {
//       dispatch(deleteDetails());
//     };
//   }, [dispatch, props.match.params.id]);

//   const myRecipe = useSelector((state) => state.detail);
//   // console.log("Recetaa", myRecipe)
//   return (
//     <div style={{ overflow: "hidden" }}>
//       {myRecipe.length === 0 ? (
//         <div>
//           <p id="not_found2">Loading...</p>
//           <img
//             alt="loading"
//             src=" https://media3.giphy.com/media/M2kCXo31seejZyuCMZ/giphy.gif?cid=ecf05e4742klc07rcztt5vy9faupcpbozevdfpwwhgei3si0&rid=giphy.gif&ct=s"
//             id="img"
//           />
//         </div>
//       ) : (
//         <div className="recipeContainer">
//           <div className="recipeContainer2">
//             <h1>{myRecipe[0].title}</h1>
//             <img
//               src={myRecipe[0].image}
//               width="300px"
//               height="220px"
//               alt="img not found"
//             />
//             {/* <h2>Score: {myRecipe[0].spoonacularScore}</h2> */}
//             <h3 className="Preparation">Preparation time:</h3>
//             <h2 className="Textito"> {myRecipe[0].readyInMinutes} minutes</h2>
//             <h3 className="Preparation">Healthy Food Level: </h3>
//             <h2 className="Textito">{myRecipe[0].healthScore}</h2>
//             <h3 className="Preparation"> Like: </h3>
//             <h2 className="Textito">{myRecipe[0].aggregateLikes}</h2>
//             <h3 className="Preparation">Diets: </h3>
//             <h2 className="Textito">{myRecipe[0].diets}</h2>
//             <h3 className="Preparation">Dish Type:</h3>
//             <h2 className="Textito"> {myRecipe[0].dishTypes}</h2>




//           </div>
//           <div className="recipeDetail_text1">
//             <p id="Recipe">RECIPE</p>
//             <p id="ingredients">Ingredients: </p>
//             <p className="body">{myRecipe[0].ingredients}</p>
//             <p id="title">Summary: </p>
//             <p className="body">{myRecipe[0].summary}</p>
//             <p id="title2">Instructions: </p>
//             <p id="body2">{myRecipe[0].steps}</p>

//             {/* <p id="score">Score: </p> */}
//           </div>
//           <Link to="/home">
//             <button id="buttonReturn">Return</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }