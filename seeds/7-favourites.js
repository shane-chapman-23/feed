exports.seed = (knex, Promise) => {
  return knex('favourites').insert([
    {
      user_id: 1,
      recipe_id: 200,
    }
  ])
}