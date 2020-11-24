export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_ALL_INGREDIENTS = 'FETCH_ALL_INGREDIENTS'
export const FETCH_STEPS = 'FETCH_STEPS'
export const FETCH_MY_RECIPES = 'FETCH_MY_RECIPES'
export const ADD_TO_MY_RECIPES = 'ADD_TO_MY_RECIPES'
export const REMOVE_RECIPE = 'REMOVE_RECIPE'





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

export function fetchAllIngredients(allIngredients){
    return {
        type: FETCH_ALL_INGREDIENTS,
        allIngredients
    }
}


export function fetchSteps(steps){
    return {
        type: FETCH_STEPS,
        steps
    }
}

export function fetchMyRecipes(myRecipes) {
    return {
      type: FETCH_MY_RECIPES,
      myRecipes
    }
  }

export function addToMyRecipes(recipe) {
    return {
        type: ADD_TO_MY_RECIPES,
        recipe
    }
}
  
export const removeRecipe = (recipe) => {
    return {
      type: REMOVE_RECIPE,
      recipe
    }
  }