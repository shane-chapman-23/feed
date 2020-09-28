export function getRecipeIngredients(ingredients, recipeId) {
    const ingredientsFilter = ingredients.filter(item => 
        {return item.ingredients[0].recipe_id === recipeId})
        return ingredientsFilter[0].ingredients
}

export function getRecipeSteps(steps, recipeId) {
    const stepsFilter = steps.filter(item => {
        return item.steps[0].recipe_id === recipeId})
        return stepsFilter[0].steps
}

export function getFavouriteIds(favourites) {
    return favourites.map(item => item.id)
}

export function getAllIngredients(ingredients, favouriteIds) {
    const ingredientArray = []
    const allIngredients = favouriteIds.map(favouriteId => ingredients.filter(item => 
        { return item.ingredients[0].recipe_id === favouriteId}))
        return allIngredients
        
        
}




//map over the favourites ids,
//with each Id filter the ingredients list
//return each ingredient
