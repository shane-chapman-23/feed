exports.seed = (knex, Promise) => {
  return knex('ingredients').insert([
    { 
      ingredient_id: 1,
      ingredient_name: 'Olive Oil',
    },
    { 
      ingredient_id: 2,
      ingredient_name: 'Garlic',
    },
    { 
      ingredient_id: 3,
      ingredient_name: 'Butter',
    },
    { 
      ingredient_id: 4,
      ingredient_name: 'Basmati Rice',
    },
    { 
      ingredient_id: 5,
      ingredient_name: 'Water',
    },
    { 
      ingredient_id: 6,
      ingredient_name: 'Salt',
    },
    { 
      ingredient_id: 7,
      ingredient_name: 'Ginger',
    },
    { 
      ingredient_id: 8,
      ingredient_name: 'Pork Loin Steaks',
    },
    { 
      ingredient_id: 9,
      ingredient_name: 'Soy Sause',
    },
    { 
      ingredient_id: 10,
      ingredient_name: 'Coriander',
    },
    { 
      ingredient_id: 11,
      ingredient_name: 'Tomato',
    },
    { 
      ingredient_id: 12,
      ingredient_name: 'Cucumber',
    },
    { 
      ingredient_id: 13,
      ingredient_name: 'Baby spinach leaves',
    },
    { 
      ingredient_id: 14,
      ingredient_name: 'Spring onion',
    },
    { 
      ingredient_id: 15,
      ingredient_name: 'Lime',
    },
    { 
      ingredient_id: 16,
      ingredient_name: 'Honey',
    },
    { 
      ingredient_id: 17,
      ingredient_name: 'Crispy Shallots',
    },
  ])
}