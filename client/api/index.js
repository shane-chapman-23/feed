import request from 'superagent'

export function getRecipes () {
    return request
    .get('/api/recipes')
    .then(response => response.body)
}