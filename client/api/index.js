import request from 'superagent'

export function getRecipes() {
    return request.get('/api/recipes')
    .then(res => res.body.recipes)
}

export function getIngredients(id) {
    return request
    .get(`/api/ingredients/${id}`)
    .then(response => response.body.ingredients)
}


export function getSteps(id) {
    return request
    .get(`/api/steps/${id}`)
    .then(response => response.body.steps)
}

export function getShoppingList(){
    return request.get('/api/shoppinglist')
        .then(res => res.body.shoppingList)
}

export function addShoppingList(recipe_id) {
    return request.post('/api/shoppinglist')
        .send({recipe_id})
        .then(res => res.body)
}