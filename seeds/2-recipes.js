exports.seed = (knex, Promise) => {
  return knex('recipes').insert([
    { id: 1,
      recipe_name: 'Caramelised Pork & Garlic Rice',
      recipe_description: 'Coat tender chunks of pork in a sweet and savoury sauce with a dash of zingy ginger to liven the whole thing up. With moreish garlic rice and a refreshing salad, this meal has a burst of flavour in every bite!',
      image: '/caramelised_pork.png',
      prep_time: '25-35 mins',
      cook_time: '30-40 mins',
      rating: 5,
      food_category: ''
    }
  ])
}

 