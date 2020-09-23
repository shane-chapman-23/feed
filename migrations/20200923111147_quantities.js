exports.up = (knex, Promise) => {
    return knex.schema.createTable('quantity', (table) =>{
    table.increments('quantity_id').primary()
    table.foreign('recipe_id').references('recipes.recipe_id')
    table.foreign('ingredient_id').references('ingredients.ingredient_id')
    table.foreign('measurement_id').references('measurement.measurement_id')
    table.integer('ingredient_quantity')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tasks')
};