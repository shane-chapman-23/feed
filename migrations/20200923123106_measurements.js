exports.up = (knex, Promise) => {
    return knex.schema.createTable('measurements', (table) =>{
    table.increments('measurement_id').primary() 
    table.string('measurement_name')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('food_category')
};