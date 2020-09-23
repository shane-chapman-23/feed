exports.up = (knex, Promise) => {
    return knex.schema.createTable('food_category', (table) =>{
    table.increments('food_category_id').primary() 
    table.string('food_category_name')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('food_category')
};