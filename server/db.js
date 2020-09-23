const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getRecipes,
    getRecipeDetails
}

function getRecipes (db = database) {
    return db('recipes')
}

function getRecipeDetails (id, db = database){
  return db('quantities')
        .join('recipes', 'recipes.id', 'quantities.recipe_id')
        .where('recipes.id', id)
        .select('ingredient_id', 'ingredient_quantity', 'measurement_id')
}