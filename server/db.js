const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getRecipes,
    getIngredients,
    getSteps,
    addFavourite,
    getFavourites
}

function getRecipes(db = database) {
    return db('recipes')
}

function getIngredients(id, db = database) {
        return db('quantities')
            .join('recipes', 'recipes.id', 'quantities.recipe_id')
            .join('ingredients', 'ingredients.id', 'quantities.ingredient_id' )
            .join('measurements', 'measurements.id', 'quantities.measurement_id')
            .where('recipes.id', id)
            .select('recipe_id', 'ingredient_name', 'ingredient_quantity', 'measurement_name')
            .then((result) => {
                return result
            })   
}

function getSteps(id, db = database) {
    return db('steps')
        .join('recipes', 'recipes.id', 'steps.recipe_id')
        .where('recipes.id', id)
        .select('recipe_id', 'step_number', 'step_desc')
        .then((result) => {
            return result
        })
}

//Favourties
function addFavourite({recipe_id, recipe_name}, db = database){
    return db('users').insert({recipe_id, recipe_name})
}

function getFavourites(id = 1, db = database){
  return db('users')
    .select('recipe_id', 'recipe_name')
    //.where('id', id)
    //.then(parse)
} 

// // JSON.parse()
// function parse(stuff) {
//   return stuff.map(users => {
//     users.favourites_ids = JSON.parse(users.favourites_ids)
//     return users
//   }) 
// }