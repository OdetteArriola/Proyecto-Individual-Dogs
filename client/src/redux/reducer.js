
const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    detail: [],
    error: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DOGS":
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
                error: "",
                detail: [],
            }

        case "GET_DOGS_BY_NAME":
            return {
                ...state,
                allDogs: action.payload,
                error: "",
            }

        case "GET_DOGS_BY_TEMP":
            return {
                ...state,
                allDogs: action.payload,
                error: "",
            }

        case 'GET_TEMPERAMENTS_LIST':
            return {
                ...state,
                temperaments: action.payload,
                error: "",
            }

          
        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'created' ?
                state.dogs.filter(el => el.createdInDB === true) :
                state.dogs.filter(el => !el.createdInDB);
            return {
                ...state,
                allDogs: createdFilter,
                error: "",
            }

        case 'ORDER_BY_NAME':
            const sortedArr = action.payload === 'asc' ?
                [...state.dogs].sort(function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (b.name > a.name) { return -1 }
                    return 0;
                }) :
                [...state.dogs].sort(function (a, b) {
                    if (a.name > b.name) { return -1; }
                    if (b.name > a.name) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allDogs: sortedArr
            }

        case 'ORDER_BY_WEIGHT':
            const sortedWeight = action.payload === 'asc' ?
                [...state.dogs].sort(function (a, b) {
                    if(a.weight_min === null) { return 0 }
                    if (a.weight_min < b.weight_min) { return 1 }
                    if (b.weight_min < a.weight_min) { return -1 }
                    return 0;
                }) :
                [...state.dogs].sort(function (a, b) {
                    if(a.weight_min === null) { return 0 }
                    if (a.weight_min < b.weight_min) { return -1; }
                    if (b.weight_min < a.weight_min) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allDogs: sortedWeight
            }

        case "FILTER_BY_MAX_WEIGHT":
            const everyDog = state.allDogs
            const weightMAXFiltered = action.payload === 'all' ?
                everyDog :
                everyDog.filter(el => el.weight_max <= action.payload)
            return {
                ...state,
                allDogs: weightMAXFiltered
            }

        case "FILTER_BY_MIN_WEIGHT":
            const allDoguis = state.allDogs
            const weightMINFiltered = action.payload === 'all' ?
                allDoguis :
                allDoguis.filter(el => el.weight_min >= action.payload)
            return {
                ...state,
                allDogs: weightMINFiltered
            }

        case "POST_DOG":
            return {
                ...state
            }

        case "GET_DETAILS":
            return{
                ...state,
                details: action.payload
            }

        case "DELETE_DETAILS":
            return{
                ...state,
                details: []
            }

        default:
            return state
    }
}

    
export default rootReducer;