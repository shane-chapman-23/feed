
exports.up = (knex, Promise) => {
    return knex.schema.createTable('shoppingList', (table) =>{
    table.increments('id').primary()
    table.integer('recipe_id')
    table.foreign('recipe_id').references('recipes.id')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shoppingList')
};
