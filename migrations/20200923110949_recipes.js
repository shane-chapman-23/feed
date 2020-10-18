exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) =>{
    table.increments('id').primary()
    table.string('recipe_name')
    table.text('recipe_description')
    table.string('image')
    table.string('prep_time')
    table.string('cook_time')
    table.integer('rating')
    table.string('food_category')
    table.integer('serving_size')
    table.boolean('added')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipes')
};