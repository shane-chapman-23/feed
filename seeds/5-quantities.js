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
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 46,
      recipe_id: 3, 
      ingredient_id: 31,
      ingredient_quantity: 1,
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
    { 
      id: 49,
      recipe_id: 4, 
      ingredient_id: 19,
      ingredient_quantity: 1,
      measurement_id: 5,
    },
    { 
      id: 50,
      recipe_id: 4, 
      ingredient_id: 5,
      ingredient_quantity: 1.5,
      measurement_id: 5,
    },
    { 
      id: 51,
      recipe_id: 4, 
      ingredient_id: 6,
      ingredient_quantity: 1,
      measurement_id: 14,
    },
    { 
      id: 52,
      recipe_id: 4, 
      ingredient_id: 33,
      ingredient_quantity: 0.25,
      measurement_id: 10,
    },
    { 
      id: 53,
      recipe_id: 4, 
      ingredient_id: 14,
      ingredient_quantity: 2,
      measurement_id: 10,
    },
    { 
      id: 54,
      recipe_id: 4, 
      ingredient_id: 22,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 55,
      recipe_id: 4, 
      ingredient_id: 38,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 56,
      recipe_id: 4, 
      ingredient_id: 37,
      ingredient_quantity: 2,
      measurement_id: 12, 
    },
    { 
      id: 57,
      recipe_id: 4, 
      ingredient_id: 42,
      ingredient_quantity: 1.5,
      measurement_id: 6, 
    },
    { 
      id: 58,
      recipe_id: 4, 
      ingredient_id: 9,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 59,
      recipe_id: 4, 
      ingredient_id: 34,
      ingredient_quantity: 15,
      measurement_id: 3, 
    },
    { 
      id: 60,
      recipe_id: 4, 
      ingredient_id: 36,
      ingredient_quantity: 50,
      measurement_id: 3, 
    },
    { 
      id: 61,
      recipe_id: 4, 
      ingredient_id: 41,
      ingredient_quantity: 350,
      measurement_id: 3, 
    },
    { 
      id: 62,
      recipe_id: 4, 
      ingredient_id: 35,
      ingredient_quantity: 0.5,
      measurement_id: 5, 
    },
    { 
      id: 63,
      recipe_id: 4, 
      ingredient_id: 39,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 64,
      recipe_id: 4, 
      ingredient_id: 6,
      ingredient_quantity: 1,
      measurement_id: 14, 
    },
    { 
      id: 65,
      recipe_id: 4, 
      ingredient_id: 37,
      ingredient_quantity: 2,
      measurement_id: 12, 
    },
    { 
      id: 66,
      recipe_id: 4, 
      ingredient_id: 42,
      ingredient_quantity: 0.25,
      measurement_id: 6, 
    },
    { 
      id: 67,
      recipe_id: 5, 
      ingredient_id: 43,
      ingredient_quantity: 400,
      measurement_id: 3, 
    },
    { 
      id: 68,
      recipe_id: 5, 
      ingredient_id: 6,
      ingredient_quantity: 1,
      measurement_id: 14, 
    },
    { 
      id: 69,
      recipe_id: 5, 
      ingredient_id: 44,
      ingredient_quantity: 2,
      measurement_id: 12, 
    },
    { 
      id: 70,
      recipe_id: 5, 
      ingredient_id: 3,
      ingredient_quantity: 1,
      measurement_id: 12, 
    },
    { 
      id: 71,
      recipe_id: 5, 
      ingredient_id: 45,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 72,
      recipe_id: 5, 
      ingredient_id: 22,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 73,
      recipe_id: 5, 
      ingredient_id: 46,
      ingredient_quantity: 200,
      measurement_id: 3, 
    },
    { 
      id: 74,
      recipe_id: 5, 
      ingredient_id: 23,
      ingredient_quantity: 300,
      measurement_id: 3, 
    },
    { 
      id: 75,
      recipe_id: 5, 
      ingredient_id: 47,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 76,
      recipe_id: 5, 
      ingredient_id: 48,
      ingredient_quantity: 0.5,
      measurement_id: 6, 
    },
    { 
      id: 77,
      recipe_id: 5, 
      ingredient_id: 49,
      ingredient_quantity: 0.5,
      measurement_id: 6, 
    },
    { 
      id: 78,
      recipe_id: 5, 
      ingredient_id: 50,
      ingredient_quantity: 0.5,
      measurement_id: 6, 
    },
    { 
      id: 79,
      recipe_id: 5, 
      ingredient_id: 51,
      ingredient_quantity: 0.25,
      measurement_id: 6, 
    },
    { 
      id: 80,
      recipe_id: 5, 
      ingredient_id: 5,
      ingredient_quantity: 0.75,
      measurement_id: 5, 
    },
    { 
      id: 81,
      recipe_id: 5, 
      ingredient_id: 40,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 82,
      recipe_id: 5, 
      ingredient_id: 52,
      ingredient_quantity: 0.5,
      measurement_id: 5, 
    },
    { 
      id: 83,
      recipe_id: 5, 
      ingredient_id: 53,
      ingredient_quantity: 1.5,
      measurement_id: 6, 
    },
    { 
      id: 84,
      recipe_id: 5, 
      ingredient_id: 54,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 85,
      recipe_id: 5, 
      ingredient_id: 55,
      ingredient_quantity: 125,
      measurement_id: 3, 
    },
    { 
      id: 86,
      recipe_id: 6, 
      ingredient_id: 56,
      ingredient_quantity: 800,
      measurement_id: 3, 
    },
    { 
      id: 87,
      recipe_id: 6, 
      ingredient_id: 1,
      ingredient_quantity: 2,
      measurement_id: 12, 
    },
    { 
      id: 88,
      recipe_id: 6, 
      ingredient_id: 57,
      ingredient_quantity: 400,
      measurement_id: 3, 
    },
    { 
      id: 89,
      recipe_id: 6, 
      ingredient_id: 37,
      ingredient_quantity: 0.25,
      measurement_id: 5, 
    },
    { 
      id: 90,
      recipe_id: 6, 
      ingredient_id: 13,
      ingredient_quantity: 0.25,
      measurement_id: 4, 
    },
    { 
      id: 91,
      recipe_id: 6, 
      ingredient_id: 59,
      ingredient_quantity: 0.5,
      measurement_id: 15, 
    },
    { 
      id: 92,
      recipe_id: 6, 
      ingredient_id: 60,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 93,
      recipe_id: 6, 
      ingredient_id: 61,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 94,
      recipe_id: 6, 
      ingredient_id: 62,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 95,
      recipe_id: 6, 
      ingredient_id: 1,
      ingredient_quantity: 2,
      measurement_id: 12, 
    },
    { 
      id: 96,
      recipe_id: 6, 
      ingredient_id: 59,
      ingredient_quantity: 0.5,
      measurement_id: 16, 
    },
    { 
      id: 97,
      recipe_id: 6, 
      ingredient_id: 63,
      ingredient_quantity: 1,
      measurement_id: 12, 
    },
    { 
      id: 98,
      recipe_id: 6, 
      ingredient_id: 16,
      ingredient_quantity: 1,
      measurement_id: 6, 
    },
    { 
      id: 99,
      recipe_id: 6, 
      ingredient_id: 66,
      ingredient_quantity: 3,
      measurement_id: 12, 
    },
    { 
      id: 100,
      recipe_id: 6, 
      ingredient_id: 64,
      ingredient_quantity: 100,
      measurement_id: 3, 
    },
    { 
      id: 101,
      recipe_id: 6, 
      ingredient_id: 65,
      ingredient_quantity: 0.5,
      measurement_id: 10, 
    },
    { 
      id: 102,
      recipe_id: 6, 
      ingredient_id: 11,
      ingredient_quantity: 1,
      measurement_id: 10, 
    },
    { 
      id: 103,
      recipe_id: 6, 
      ingredient_id: 20,
      ingredient_quantity: 0.25,
      measurement_id: 10, 
    },
    { 
      id: 104,
      recipe_id: 7, 
      ingredient_id: 2,
      ingredient_quantity: 4.20,
      measurement_id: 10, 
    }
   ])
}