exports.seed = (knex, Promise) => {
  return knex('quantities').insert([
    { 
      id: 1,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 1, //Olive Oil
      ingredient_quantity: 1,
      measurement_id: 1, //dash
    },
    { 
      id: 2,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 2, //Garlic
      ingredient_quantity: 2,
      measurement_id: 2, //Cloves
    },
    { 
      id: 3,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 3, //Butter
      ingredient_quantity: 20,
      measurement_id: 3, //g
    },
    { 
      id: 4,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 4, //Basmati Rice
      ingredient_quantity: 1,
      measurement_id: 4, //Packet
    },
    { 
      id: 5,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 5, //Water
      ingredient_quantity: 1.5,
      measurement_id: 5, //
    },
    { 
      id: 6,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 6, //Salt
      ingredient_quantity: 0.25,
      measurement_id: 6, //tsp
    },
    { 
      id: 7,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 7, //Ginger
      ingredient_quantity: 1,
      measurement_id: 7, //Knob
    },
    { 
      id: 8,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 8, //Pork
      ingredient_quantity: 500,
      measurement_id: 3, //g
    },
    { 
      id: 9,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 9, //Soy Sause
      ingredient_quantity: 2,
      measurement_id: 6, //tsb
    },
    { 
      id: 10,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 10, //Coriander
      ingredient_quantity: 1,
      measurement_id: 8, //bunch
    },
    { 
      id: 11,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 11, //Tomato
      ingredient_quantity: 1,
      measurement_id: 10, //''
    },
    { 
      id: 12,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 12, //Cucumber
      ingredient_quantity: 1,
      measurement_id: 10, //''
    },
    { 
      id: 13,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 13, //
      ingredient_quantity: 30,
      measurement_id: 3, //bag
    },
    { 
      id: 14,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 14, //Spring Onion
      ingredient_quantity: 1,
      measurement_id: 8, //Bunch
    },
    { 
      id: 15,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 15, //Lime
      ingredient_quantity: 0.5,
      measurement_id: 10, //''
    },
    { 
      id: 16,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 16, //Honey
      ingredient_quantity: 2,
      measurement_id: 6, //tsp
    },
    { 
      id: 17,
      recipe_id: 1, //Caramelised Pork & Garlic Rice
      ingredient_id: 17, //Crispy Shallots
      ingredient_quantity: 1,
      measurement_id: 4, //packet
    },
    { 
      id: 18,
      recipe_id: 2, 
      ingredient_id: 2, 
      ingredient_quantity: 2,
      measurement_id: 2, 
    },
    { 
      id: 19,
      recipe_id: 2, 
      ingredient_id: 18,
      ingredient_quantity: 2,
      measurement_id: 11, 
    },
    { 
      id: 20,
      recipe_id: 2, 
      ingredient_id: 3,
      ingredient_quantity: 40,
      measurement_id: 3, 
    },
    { 
      id: 21,
      recipe_id: 2, 
      ingredient_id: 19,
      ingredient_quantity: 1,
      measurement_id: 5, 
    },
    { 
      id: 22,
      recipe_id: 2, 
      ingredient_id: 6,
      ingredient_quantity: 0.25,
      measurement_id: 6, 
    },
    { 
      id: 23,
      recipe_id: 2, 
      ingredient_id: 20,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 24,
      recipe_id: 2, 
      ingredient_id: 21,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 25,
      recipe_id: 2, 
      ingredient_id: 22,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 26,
      recipe_id: 2, 
      ingredient_id: 15,
      ingredient_quantity: 0.5,
      measurement_id: 10, 
    },
    { 
      id: 27,
      recipe_id: 2, 
      ingredient_id: 23,
      ingredient_quantity: 500,
      measurement_id: 3, 
    },
    { 
      id: 28,
      recipe_id: 2, 
      ingredient_id: 13,
      ingredient_quantity: 30,
      measurement_id: 3, 
    },
    { 
      id: 29,
      recipe_id: 2, 
      ingredient_id: 24,
      ingredient_quantity: 1,
      measurement_id: 4, 
    },
    { 
      id: 30,
      recipe_id: 2, 
      ingredient_id: 9,
      ingredient_quantity: 1,
      measurement_id: 12, 
    },
    { 
      id: 31,
      recipe_id: 2, 
      ingredient_id: 25,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 32,
      recipe_id: 2, 
      ingredient_id: 26,
      ingredient_quantity: 30,
      measurement_id: 3, 
    },
    { 
      id: 33,
      recipe_id: 3, 
      ingredient_id: 2,
      ingredient_quantity: 1,
      measurement_id: 2, 
    },
    { 
      id: 34,
      recipe_id: 3, 
      ingredient_id: 9,
      ingredient_quantity: 2.5,
      measurement_id: 12, 
    },
    { 
      id: 35,
      recipe_id: 3, 
      ingredient_id: 16,
      ingredient_quantity: 4,
      measurement_id: 6, 
    },
    { 
      id: 36,
      recipe_id: 3, 
      ingredient_id: 23,
      ingredient_quantity: 500,
      measurement_id: 3, 
    },
    { 
      id: 37,
      recipe_id: 3, 
      ingredient_id: 20,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 38,
      recipe_id: 3, 
      ingredient_id: 27,
      ingredient_quantity: 0.25,
      measurement_id: 5, 
    },
    { 
      id: 39,
      recipe_id: 3, 
      ingredient_id: 6,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 40,
      recipe_id: 3, 
      ingredient_id: 28,
      ingredient_quantity: 1,
      measurement_id: 12, 
    },
    { 
      id: 41,
      recipe_id: 3, 
      ingredient_id: 22,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 42,
      recipe_id: 3, 
      ingredient_id: 29,
      ingredient_quantity: 1,
      measurement_id: 13, 
    },
    { 
      id: 43,
      recipe_id: 3, 
      ingredient_id: 30,
      ingredient_quantity: 6,
      measurement_id: 10, 
    },
    { 
      id: 44,
      recipe_id: 3, 
      ingredient_id: 30,
      ingredient_quantity: 6,
      measurement_id: 10, 
    },
    { 
      id: 45,
      recipe_id: 3, 
      ingredient_id: 31,
      ingredient_quantity: '',
      measurement_id: 10, 
    },
    { 
      id: 46,
      recipe_id: 3, 
      ingredient_id: 31,
      ingredient_quantity: '',
      measurement_id: 10, 
    },
    { 
      id: 47,
      recipe_id: 3, 
      ingredient_id: 17,
      ingredient_quantity: 1,
      measurement_id: 4, 
    },
    { 
      id: 48,
      recipe_id: 3, 
      ingredient_id: 32,
      ingredient_quantity: 1,
      measurement_id: 14, 
    },


  ])
}