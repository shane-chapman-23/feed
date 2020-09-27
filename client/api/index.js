import request from 'superagent'

export function getRecipes () {
    return request
    .get('/api/recipes')
    .then(res => res.body.recipes)
}

export function getIngredients(id) {
    return request
    .get(`/api/ingredients/${id}`)
    .then(response => response.body)
}

export function getSteps(id) {
    return request
    .get(`/api/steps/${id}`)
    .then(response => response.body)
}

export function getFavourites(id){
    return request  
        .get(`/api/favourites/${id}`)//need to actually hook up id currently hard coded in db function
        .then(res => res.body)
    console.log(res.body)
}