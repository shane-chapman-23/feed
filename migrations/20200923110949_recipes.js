exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) =>{
    table.increments('id').primary()
    table.string('recipe_name')
    table.string('recipe_description')
    table.string('image')
    table.string('prep_time')
    table.string('cook_time')
    table.integer('rating')
    table.string('food_category')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipes')
};