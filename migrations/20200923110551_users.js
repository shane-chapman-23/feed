exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('password')
    table.string('email')
    table.string('fname')
    table.string('lname')
    table.string('recipe_name')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
};