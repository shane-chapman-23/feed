exports.up = (knex, Promise) => {
    return knex.schema.createTable('quantities', (table) =>{
    table.increments('id').primary()
    table.integer('recipe_id')
    table.foreign('recipe_id').references('recipes.id')
    table.integer('ingredient_id')
    table.foreign('ingredient_id').references('ingredients.id')
    table.integer('ingredient_quantity')
    table.integer('measurement_id').references('measurements.id')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('quantities')
};