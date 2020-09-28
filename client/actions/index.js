export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_STEPS = 'FETCH_STEPS'

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES'
export const FETCH_FAVOURITES = 'FETCH_FAVOURITES'

export const CHANGE_PAGE = 'CHANGE_PAGE'

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function fetchRecipes (recipes){
    return {
        type: FETCH_RECIPES,
        recipes
    }
}

export function fetchIngredients (ingredients){
    return {
        type: FETCH_INGREDIENTS,
        ingredients
    }
}

export function fetchSteps (steps){
    return {
        type: FETCH_STEPS,
        steps
    }
}

//FAVOURITES
export const addToFavourites = (recipe) => {
  return {
    type: ADD_TO_FAVOURITES,
    recipe
  }
}

export const deleteFromFavourites = (id) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    id
  }
}

export const fetchFavourites = (favourites) => {
  return {
    type: FETCH_FAVOURITES,
    favourites
  }
}
