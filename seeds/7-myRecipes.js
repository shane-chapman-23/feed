
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('myRecipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('myRecipes').insert([
        {id: 1, recipe_id: 1}
      ]);
    });
};
