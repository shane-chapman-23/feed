exports.seed = (knex, Promise) => {
  return knex('ingredients').insert([
    { 
      id: 1,
      ingredient_name: 'Olive Oil',
    },
    { 
      id: 2,
      ingredient_name: 'Garlic',
    },
    { 
      id: 3,
      ingredient_name: 'Butter',
    },
    { 
      id: 4,
      ingredient_name: 'Basmati Rice',
    },
    { 
      id: 5,
      ingredient_name: 'Water',
    },
    { 
      id: 6,
      ingredient_name: 'Salt',
    },
    { 
      id: 7,
      ingredient_name: 'Ginger',
    },
    { 
      id: 8,
      ingredient_name: 'Pork Loin Steaks',
    },
    { 
      id: 9,
      ingredient_name: 'Soy Sauce',
    },
    { 
      id: 10,
      ingredient_name: 'Coriander',
    },
    { 
      id: 11,
      ingredient_name: 'Tomato',
    },
    { 
      id: 12,
      ingredient_name: 'Cucumber',
    },
    { 
      id: 13,
      ingredient_name: 'Baby spinach leaves',
    },
    { 
      id: 14,
      ingredient_name: 'Spring onion',
    },
    { 
      id: 15,
      ingredient_name: 'Lime',
    },
    { 
      id: 16,
      ingredient_name: 'Honey',
    },
    { 
      id: 17,
      ingredient_name: 'Crispy Shallots',
    },
    {
      id: 18,
      ingredient_name: 'Makrut Leaves'
    },
    {
      id: 19,
      ingredient_name: 'Jasmine Rice'
    },
    {
      id: 20,
      ingredient_name: 'Red Onion'
    },
    {
      id: 21,
      ingredient_name: 'Capsicum'
    },
    {
      id: 22,
      ingredient_name: 'Carrot'
    },
    {
      id: 23,
      ingredient_name: 'Beef Strips'
    },
    {
      id: 24,
      ingredient_name: 'Thai Red Curry Paste'
    },
    {
      id: 25,
      ingredient_name: 'Brown Sugar'
    },
    {
      id: 26,
      ingredient_name: 'Roasted Peanuts'
    },
    {
      id: 27,
      ingredient_name: 'White Wine Vinegar'
    },
    {
      id: 28,
      ingredient_name: 'Sugar'
    },
    {
      id: 29,
      ingredient_name: 'Cos Lettuce'
    },
    {
      id: 30,
      ingredient_name: 'Mini Tortillas'
    },
    {
      id: 31,
      ingredient_name: 'Garlic Aoli'
    },
    {
      id: 32,
      ingredient_name: 'Chilli Flakes'
    },
  ])
}