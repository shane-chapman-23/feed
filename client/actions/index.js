export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_STEPS = 'FETCH_STEPS'


export function fetchRecipes (recipe){
    return {
        type: FETCH_RECIPES,
        recipe
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
