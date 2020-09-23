const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getRecipes,
    getIngredients
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
            .select('ingredient_name', 'ingredient_quantity', 'measurement_name')
            .then((result) => {
                console.log(result)
            })   
}

// function getAll(id, db = database) {\
//     return
//     getRecipes()
//     getIngredients()
//     getSteps()
// }