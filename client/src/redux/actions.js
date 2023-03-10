import axios from "axios";
export const GET_DOGS = "GET_DOGS"; 
export const CREATE_DOG = "CREATE_DOG"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"; 
export const GET_DETAIL = "GET_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS"
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const ORDER_BY_NAME = "ORDER_BY_NAME";


export const getDogs = () => {
    return async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/dogs")
        dispatch({type: GET_DOGS, payload: apiData.data})
    }
};

export const createDog = (payload) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/dogs", payload)
        return response
    }
};

export const getDogsByName = (name) => {
    return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({
            type: "GET_DOGS_BY_NAME",
            payload: data
        });
    };
};

export const getDetail = (id) => {
    console.log(id)
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`)  
        console.log(apiData.data[0])
        return dispatch({
            type: GET_DETAIL, payload: apiData.data[0] 
        })
    }
};

export const getTemperaments = () => {
    return async (dispatch) => {
        const apiData = await axios.get("http://localhost:3001/temperaments")
        return dispatch({
            type: GET_TEMPERAMENTS, payload: apiData.data
        })
    }
};

/////FILTROS////

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export const filterTemperaments = (temperament) => {
    return {
        type: FILTER_TEMPERAMENTS,
        payload: temperament
    }
}

///ORDENAMIENTOS

export const orderByWeight = (payload) => {
    return {
      type: ORDER_BY_WEIGHT,
      payload,
    };
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload: payload
    }
}


