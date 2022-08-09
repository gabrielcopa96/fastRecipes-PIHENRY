import axios from "axios";

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const GET_RECIPE = 'GET_RECIPE'
export const GET_DIETS = 'GET_DIETS'
export const FILTER_ORDER = 'FILTER_ORDER'
export const FILTER_DIETA = 'FILTER_DIETA'
export const FILTER_BDAPI = 'FILTER_BDAPI'
export const FILTER_SEARCH = 'FILTER_SEARCH'
export const FILTER_GETRECIPE = "FILTER_GETRECIPE"
export const REMOVE_RECIPE_DETAIL = "REMOVE_RECIPE_DETAIL"

export const getAllRecipes = () => async dispatch => {
    const apiRecipe = await axios.get(`/recipe`)
    const apiData = await dispatch({
        type: GET_ALL_RECIPES,
        payload: apiRecipe.data
    })
    return apiData
}

export const getRecipes = async() => {
    const apiRecipe = await axios.get(`/recipe`)
    return apiRecipe.data
}

export const getRecipe = (id) => dispatch => {
    return axios.get(`/recipe/${id}`)
        .then(response => {
            dispatch({
                type: GET_RECIPE,
                payload: response.data
            })
        })
}

export const getRecipeById = async(id) => {
    const apiRecipe = await axios.get(`/recipe/${id}`)
    return apiRecipe.data
}

export const getRecipeSearchBar = (name) => dispatch => {
    return axios.get(`/recipe?name=${name}`)
        .then(response => {
            dispatch({
                type: FILTER_GETRECIPE,
                payload: response.data
            })
        })
}

// export const filteredOrder = (payload) => {
//     return {
//         type: FILTER_ORDER,
//         payload
//     }
// }

// export const filteredDietas = (payload) => {
//     return {
//         type: FILTER_DIETA,
//         payload
//     }
// }

// export const filteredBdandApi = (payload) => {
//     return {
//         type: FILTER_BDAPI,
//         payload
//     }
// }

// export const filteredSearchRealTime = (payload) => {
//     return {
//         type: FILTER_SEARCH,
//         payload
//     }
// }

export const postRecipes = (payload) => async dispatch => {
    const myRecipe = await axios.post(`/recipe`, payload)
    console.log(myRecipe)
    dispatch({
        type: 'POST_RECIPE',
        payload: myRecipe
    })

    return myRecipe
}

export const envioRecipes = async (payload) => {
    const myRecipe = await axios.post(`/recipe`, payload)
    return myRecipe
}

export const getAllDiets = () => async dispatch => {
    const prevDiets = await axios.get(`/types`)
    const dataDiets = await dispatch({
        type: GET_DIETS,
        payload: prevDiets.data
    })
    return dataDiets
}

export const getDietas = async() => {
    const prevDiets = await axios.get(`/types`)
    return prevDiets.data
}

export const EliminatedDetailRecipe = () => dispatch => {
    dispatch({
        type: REMOVE_RECIPE_DETAIL,
    })
}


