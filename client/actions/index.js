export const FETCH_RECIPES = 'FETCH_RECIPES'

export function fetchRecipes (recipe){
    return {
        type: FETCH_RECIPES,
        recipe
    }
}