exports.up = (knex, Promise) => {
    return knex.schema.createTable('ingredients', (table) => {
    table.increments('id').primary()
    table.string('ingredient_name')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('ingredients')
};