import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DOGS_BY_TEMP = "GET_DOGS_BY_TEMP";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT"
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_MAX_WEIGHT = "FILTER_BY_MAX_WEIGHT";
export const FILTER_BY_MIN_WEIGHT = "FILTER_BY_MIN_WEIGHT";
export const GET_TEMPERAMENTS_LIST = "GET_TEMPERAMENTS_LIST"

export const getDogs = () => {
    return async function(dispatch){
        const apiData = await axios.get(
            "http://localhost:3001/dogs"
            )
            const dogs = apiData.data
            dispatch({type: GET_DOGS, payload: dogs});
    }
};

export const getDog = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(
            `http://localhost:3001/dogs/${id}`
            )
            const dog = apiData.data 
            dispatch({type: GET_DOG, payload: dog})
    }
}

export const getDogsByName = (name) => {
    return async function(dispatch) {
        const apiData = await axios.get(
            `http://localhost:3001/dogs/${name}`  
        )
        const dogByName = apiData.data
        dispatch({type:GET_DOG_BY_NAME, payload: dogByName})
    }
}

export const getTemperaments = () => {
    return async function(dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/temperaments")
         return dispatch({
            type: GET_TEMPERAMENTS, payload: json.data,
        })
        } catch (error) {
            console.log(error)
        }
    }
}
// export function getTemperamentsList() {
//     return async function (dispatch) {
//         var json = await axios.get('http://localhost:3001/temperament');
//         var listOfTemperaments = json.data.map(el => el.name)
//         return dispatch({
//             type: GET_TEMPERAMENTS_LIST,
//             payload: listOfTemperaments
//         });
//     }
// }

export const createDog = (payload) => {
    return async function(dispatch) {
        const response = await axios.post("http://localhost:3001/dogs", payload)
        return response

    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteDetails() {
    return async function (dispatch){
    return dispatch({
        type: 'DELETE_DETAILS'
    })
}
}

//FILTERS
export const filterDogsByTemperament = (payload) => {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs"=${payload}`)
            return dispatch({
                type: GET_DOGS_BY_TEMP, payload: json.data
            })
        } catch (error) {
            console.log(error, "Error on the filters actions file")
        }
    }
}

export function filterDogsByMAXWeight(payload) {
    return {
        type: FILTER_BY_MAX_WEIGHT,
        payload,
    }
}

export function filterDogsByMINWeight(payload) {
    return {
        type: FILTER_BY_MIN_WEIGHT,
        payload,
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}





//ORDENAMIENTOS
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME, payload
    }
}



export const orderByWeight = (payload) => {
    return {
        type: ORDER_BY_WEIGHT, payload
    }
}


