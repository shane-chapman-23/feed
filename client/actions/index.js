export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_STEPS = 'FETCH_STEPS'
export const FETCH_LIST = 'FETCH_LIST'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_LIST = 'REMOVE_LIST'




export function fetchRecipes(recipes){
    return {
        type: FETCH_RECIPES,
        recipes
    }
}
export function fetchIngredients(ingredients){
    return {
        type: FETCH_INGREDIENTS,
        ingredients
    }
}


export function fetchSteps(steps){
    return {
        type: FETCH_STEPS,
        steps
    }
}

export function fetchShoppingList(shoppingList) {
    return {
      type: FETCH_LIST,
      shoppingList
    }
  }

export function addToShoppingList(recipe) {
    return {
        type: ADD_TO_LIST,
        recipe
    }
}
  
