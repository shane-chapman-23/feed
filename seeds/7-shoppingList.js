
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppingList').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {id: 1, recipe_id: 1}
      ]);
    });
};
