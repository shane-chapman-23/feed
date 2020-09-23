exports.up = (knex, Promise) => {
    return knex.schema.createTable('shopping_list', (table) => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.string('ingredients')
    table.string('quantities')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shopping_list')
};