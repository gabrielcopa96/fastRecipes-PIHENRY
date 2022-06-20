import { GET_ALL_RECIPES, GET_RECIPE, GET_DIETS, FILTER_DIETA, FILTER_BDAPI, FILTER_ORDER, FILTER_SEARCH, FILTER_GETRECIPE, REMOVE_RECIPE_DETAIL } from "../actions";


const initialState = {
    recipes: [],
    copyrecipes: [],
    diets: [],
    recipe: {}
}

const rootReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                copyrecipes: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case REMOVE_RECIPE_DETAIL:
            return {
                ...state,
                recipe: {},
            }
        case FILTER_ORDER:
            const filtradoForOrder = state.recipes
            const orderA = (x, y) => {
                if (x.title > y.title) return 1;
                if (x.title < y.title) return -1;
                return 0;
            };
            const orderB = (x, y) => {
                if (x.title < y.title) return 1;
                if (x.title > y.title) return -1;
                return 0;
            };
            const ordenamiento = action.payload === "asc" ? filtradoForOrder.sort(orderA) : filtradoForOrder.sort(orderB);
            return {
                ...state,
                recipes: ordenamiento
            }
        case FILTER_SEARCH:
            const searchRecipe = state.recipes
            const realTimeSearch = !action.payload.length ? state.copyrecipes : searchRecipe.filter(x => x.title.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                recipes: realTimeSearch
            }
        case FILTER_GETRECIPE:
            return {
                ...state,
                recipes: action.payload
            }
        case FILTER_DIETA:
            const allrecipe = state.copyrecipes
            const filterDieta = action.payload === "all recipes" ? allrecipe : allrecipe.filter(x => x.diets?.includes(action.payload) || x.dieta?.map(x => x.name).includes(action.payload))
            return {
                ...state,
                recipes: filterDieta
            }
        case FILTER_BDAPI:
            const allRecipe = state.copyrecipes
            const filterRecipe = action.payload === "all" ? allRecipe : action.payload === "api" ? allRecipe.filter(x => x.diets) : action.payload === "bd" ? allRecipe.filter(x => x.dieta) : null
            return {
                ...state,
                recipes: filterRecipe
            }
        case 'POST_RECIPE':
            console.log("mi post", action.payload)
            return {
                ...state,
                recipes: [...state.recipes, action.payload.data]
            }
        default: return state
    }
}

export default rootReducer;