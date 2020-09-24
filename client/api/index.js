import request from 'superagent'

export function getRecipes () {
    return request
    .get('/api/recipes')
    .then(response => response.body)
}

export function getIngredients () {
    return request
    .get('/api/ingredients/:id')
    .then(response => response.body)
}

export function getSteps() {
    return request
    .get('/api/steps/:id')
    .then(response => response.body)
}