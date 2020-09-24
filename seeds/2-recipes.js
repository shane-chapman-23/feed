exports.seed = (knex, Promise) => {
  return knex('recipes').insert([
    { id: 1,
      recipe_name: 'Caramelised Pork & Garlic Rice',
      recipe_description: 'Coat tender chunks of pork in a sweet and savoury sauce with a dash of zingy ginger to liven the whole thing up. With moreish garlic rice and a refreshing salad, this meal has a burst of flavour in every bite!',
      image: 'img/food/caramelised_pork.png',
      prep_time: '25-35 mins',
      cook_time: '30-40 mins',
      rating: 5,
      food_category: ''
    },
    { id: 2,
      recipe_name: 'Thai Beef Stir-Fry & Makrut Lime Rice',
      recipe_description: 'Enjoy the medley of fragrant flavours in this stir-fry that uses Thai red curry paste for a gentle warming heat. With makrut lime leaves bringing an enticing aroma and roasted nuts for addictive crunch, this is an easy way to enjoy the taste of Thailand at home.',
      image: 'img/food/beef_stirfry.png',
      prep_time: '25-35 mins',
      cook_time: '35-45 mins',
      rating: 5,
      food_category: ''
    }
  ])
}

 