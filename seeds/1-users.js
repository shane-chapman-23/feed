exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {
      id: 1,
      username: 'Shane',
      password: 'password123',
      email: 'shane@gmail.com',
      fname: 'Shane',
      lname: 'Chapman',
      favourites: JSON.stringify(['1', '2', '3'])
    }
  ])
}