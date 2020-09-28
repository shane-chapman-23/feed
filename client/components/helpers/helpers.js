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
    return favourites.map(item => item.recipe_id)
}

export function getAllIngredients(ingredients, favouriteIds) {
    const allIngredientsArray = []
    const allIngredients = favouriteIds.map(favouriteId => ingredients.filter(item => { return item.ingredients[0]?.recipe_id === favouriteId }))
    allIngredients.map(item => Array.prototype.push.apply(allIngredientsArray, item[0]?.ingredients))
    return allIngredientsArray
}


export function sortIngredients(ingredientsList) {
    return ingredientsList.sort((prev,  current) => {
        if (prev.ingredient_name < current.ingredient_name) 
            return -1
        if (prev.ingredient_name > current.ingredient_name) 
          return 1
        return 0
  })}

// export function removeDuplicates(arr) {
//     var newArray = []
//     arr.map(item => newArray.find((i) => 
//     {if (i.ingredient_name !== item.ingredient_name) {
//         newArray.push(item) 
//     } if(item.ingredient_name === i.ingredient_name) {
//         item.ingredient_quantity += i.ingredient_quantity
//     }}
//     ))
//     return newArray
// }

      
    




