const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)



module.exports = {
    getRecipes
}

function getRecipes (db = database) {
    return db('recipes')
    .select()
}
