exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('users')()
  .then(empty('recipes'))
  .then(empty('ingredients'))
  .then(empty('quantities'))
  .then(empty('measurements'))
}