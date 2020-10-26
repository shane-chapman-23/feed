
exports.up = function(knex, Promise) {
    return knex.schema.createTable('myRecipes', (table) =>{
        table.increments('id').primary()
        table.integer('recipe_id')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('myRecipes')
};
