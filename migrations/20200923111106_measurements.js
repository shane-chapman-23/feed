exports.up = (knex, Promise) => {
    return knex.schema.createTable('measurements', (table) =>{
    table.increments('id').primary() 
    table.string('measurement_name')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('measurements')
};        // .select('ingredient_id', 'ingredient_quantity', 'measurement_id')
