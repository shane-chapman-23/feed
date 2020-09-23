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
      ingredient_quantity: 1,
      measurement_id: 9, //bag
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
  ])
}