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

export function getAllIngredients() {
    return request
    .get('/api/ingredients')
    .then(response => response.body.allIngredients)
}


export function getSteps(id) {
    return request
    .get(`/api/steps/${id}`)
    .then(response => response.body.steps)
}

export function getMyRecipes(){
    return request.get('/api/myrecipes')
        .then(res => res.body.myRecipes)
}

export function addMyRecipes(recipe_id) {
    return request.post('/api/myrecipes')
        .send({recipe_id})
        .then(res => res.body)
}

export function removeMyRecipes(recipe_id){
    return request.delete('/api/myrecipes/' + recipe_id)
    .then(res => res.body)
}