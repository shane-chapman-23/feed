exports.up = (knex, Promise) => {
    return knex.schema.createTable('recipes', (table) =>{
    table.increments('recipe_id').primary() 
    table.string('recipe_name')
    table.string('recipe_description')
    table.string('image')
    table.string('prep_time')
    table.string('cook_time')
    table.integer('rating')
    table.foreign('food_category').references('food_category.food_category_id')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('recipes')
};