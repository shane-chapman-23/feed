export function getRecipeIds(shoppingList) {
    return shoppingList.map(item => item.recipe_id)
}

export function getRecipeIngredients(recipeIds, ingredients){
    const allRecipeIngredients = []
    recipeIds.map(id => ingredients.filter(ingredient => { 
        if(ingredient.recipe_id === id){
            allRecipeIngredients.push(ingredient)
    }}))
    return allRecipeIngredients
    
}