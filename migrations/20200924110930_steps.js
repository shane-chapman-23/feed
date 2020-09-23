
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', (table) =>{
        table.increments('id').primary()
        table.integer('recipe_id')
        table.foreign('recipe_id').references('recipes.id')
        table.integer('step_number')
        table.string('step_desc')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('steps')
};
