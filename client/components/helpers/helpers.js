export function getRecipeIngredients(ingredients, recipeId) {
    const ingredientsFilter = ingredients.filter(item => {
        return item.ingredients[0].recipe_id === recipeId})
        return ingredientsFilter[0].ingredients
}

export function getRecipeSteps(steps, recipeId) {
    const stepsFilter = steps.filter(item => {
        return item.steps[0].recipe_id === recipeId})
        return stepsFilter[0].steps
}

// export function getAllIngredients(ingredients) {
//     return ingredients.ingredients.map(item => )
// }