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
      ingredient_name: 'Soy Sause',
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
  ])
}