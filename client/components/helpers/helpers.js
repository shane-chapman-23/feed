export function getRecipeIds(shoppingList) {
    return shoppingList.map(item => item.recipe_id)
}

export function getRecipeIngredients(recipeIds, ingredients){
    const allRecipeIngredients = []
    recipeIds.map(id => ingredients.map(ingredient => { 
        if(ingredient.recipe_id === id){
            allRecipeIngredients.push(ingredient)
    }}))
    return allRecipeIngredients
    
}

export function removeDuplicates(arr){
    const newArr = []
    arr.forEach(ingredient => {
        const existing = newArr.find(item => item.ingredient_name === ingredient.ingredient_name)
        if (existing) {
            existing.ingredient_quantity += ingredient.ingredient_quantity
        } if (!existing) {
            newArr.push(ingredient)
        }
    })
    return newArr

}