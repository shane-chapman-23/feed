exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {id: 1, username: 'Shane', password: 'password123', email: 'shane@gmail.com', fname: 'Shane', lname: ''},
    {id: 2, username: 'James', password: 'password123', email: 'james@gmail.com', fname: 'James', lname: ''},
    {id: 3, username: 'Chaz', password: 'password123', email: 'chaz@gmail.com', fname: 'Chaz', lname: ''},
    {id: 4, username: 'Cheryl', password: 'password123', email: 'cheryl@gmail.com', fname: 'Cheryl', lname: ''},
  ])
}