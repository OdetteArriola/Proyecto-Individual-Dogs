
import {
    GET_DOGS,
    CREATE_DOG,
    GET_DOGS_BY_NAME,
    GET_DETAIL,
    GET_TEMPERAMENTS,
    FILTER_CREATED,
    FILTER_TEMPERAMENTS,
    ORDER_BY_WEIGHT,
    ORDER_BY_NAME
} from "./actions";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    detail: [],
    dogsCopy: [],
    error: [],
 };
 
 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs:action.payload,
                error: ""
            };
        
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload,
                // error: "",
            };

        case CREATE_DOG:
            return {
                ...state
            }
         
         case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
                error: "",
            }
 
         case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
                error: ""
            }
        
        case FILTER_CREATED:
            const dogs = state.allDogs;
            let apiDbFiltered = [];
            if (action.payload === "all") {
                apiDbFiltered = dogs;
            } else if (action.payload === "database") {
                apiDbFiltered = dogs.filter((el) => el.createInDB);
            } else {
                apiDbFiltered = dogs.filter((el) => !el.createInDB);
            }
            return {
                ...state,
                dogs: apiDbFiltered,
            };
        
        case FILTER_TEMPERAMENTS:
            const dogsTemp = state.dogs;
            let perroFiltrado;
            if (action.payload === "Temperaments") {
                perroFiltrado = dogsTemp;
            } else {
                perroFiltrado = dogsTemp.filter((el) => {
                    let array = el.temperaments.filter((e) => e.name === action.payload);
                    if (array.length !== 0) {
                    return true;
                    }
                });
            }
            return {
                ...state,
                dogs: perroFiltrado,
            };

////ORDENAMIENTOS
        case ORDER_BY_NAME:
            const allDogsFilterName = state.allDogs;
            let sortedArr;
            if (action.payload === "Nombre") {
              sortedArr = allDogsFilterName;
            } else {
              sortedArr =
                action.payload === "A-Z"
                  ? state.dogs.sort(function (a, b) {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (b.name > a.name) {
                        return -1;
                      }
                      return 0;
                    })
                  : state.dogs.sort(function (a, b) {
                      if (a.name > b.name) {
                        return -1;
                      }
                      if (b.name > a.name) {
                        return 1;
                      }
                      return 0;
                    });
            }
            return {
                ...state,
                dogs: sortedArr,
            };  

        case ORDER_BY_WEIGHT:
            let weight = [];
            if(action.payload === "min"){
                weight = state.dogs.sort((a, b) => {
                    if(a.weight_min < b.weight_min) return -1; // si el peso de a es menor que el de b, a va antes que b
                    if(a.weight_min > b.weight_min) return 1; // si el peso de a es mayor que el de b, a va despues que b
                    return 0;
                })
            } else {
                weight = state.dogs.sort((a, b) => {
                    if(a.weight_max > b.weight_min) return -1; // si el peso de a es mayor que el de b, a va antes que b
                    if(a.weight_max < b.weight_min) return 1; // si el peso de a es menor que el de b, a va despues que b
                    return 0;
                })
            }

            return{
                ...state,
                dogs: weight
            }


 
        default:
            return state
        }
 };
 
 export default rootReducer;