
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, step_desc: 'In a medium saucepan, melt the butter with a dash of olive oil over a medium heat. Add the garlic and cook until fragrant, 1-2 minutes. Add the basmati rice, water (for the rice) and the salt, stir, and bring to the boil. Reduce the heat to low and cover with a lid. Cook for 10 minutes, then remove from the heat and keep covered until the rice is tender and the water is absorbed, 10 minutes.'},
        {id: 2, recipe_id: 1, step_number: 2, step_desc: 'While the rice is cooking, finely grate the ginger. Cut the pork loin steaks into 2cm chunks. In a medium bowl, combine the ginger, pork, 1/2 the soy sauce and a drizzle of olive oil. Toss to coat and set aside.'},
        {id: 3, recipe_id: 1, step_number: 3, step_desc: 'Roughly chop the coriander. Cut the tomato and cucumber into 1cm chunks. Roughly chop the baby spinach leaves. Thinly slice the spring onion. Zest the lime to get a generous pinch, then slice into wedges.'},
        {id: 4, recipe_id: 1, step_number: 4, step_desc: 'In a large frying pan, heat a drizzle of olive oil over a medium-high heat. Add the pork and cook, tossing until almost cooked through, 2-3 minutes. Reduce the heat to medium and add the honey, water (4tsp) and the remaining soy sauce. Cook, stirring, until slightly reduced, 2-3 minutes. Remove from the heat and stir through 1/2 the coriander.'},
        {id: 5, recipe_id: 1, step_number: 5, step_desc: 'In a medium bowl, combine the tomato, cucumber, baby spinach, spring onion, lime zest and remaining coriander. Just before serving, toss with a drizzle of olive oil, a good squeeze of lime juice and a pinch of salt and pepper.'},
        {id: 6, recipe_id: 1, step_number: 6, step_desc: 'Divide the garlic rice between bowls and top with the caramelised pork and zesty tomato and cucumber salad. Sprinke with the crispy shallots and serve with any remaining lime wedges.'},
        {id: 7, recipe_id: 2, step_number: 1, step_desc: 'Finely chop the garlic. Scrunch up the markut leaves. In a medium saucepan, melt 1/2 the butter with a dash of olive oil over a medium heat. Add the makrut leaves and 1/2 the garlic and cook until fragrant, 1-2 minutes. Add the jasmine rice, water and salt and bring to the boil. Reduce the heat to low and cover with a lid. Cook for 12 minutes, then remove from the heat and keep covered until the rice is tender and the water is absorbed, 10-15 minutes.'},
        {id: 8, recipe_id: 2, step_number: 2, step_desc: 'While the rice is cooking, thinly slice the capsicum into strips. Thinly slice the carrot into half-moons. Slice the lime into wedges.'},
        {id: 9, recipe_id: 2, step_number: 3, step_desc: 'In a large frying pan or wok, heat a drizzle of olive oil over a high heat. When the oil is hot, add 1/2 the beef strips and cook until browned, 1-2 minutes. Transfer to a bowl and repeat with the remaining beef strips.'},
        {id: 10, recipe_id: 2, step_number: 4, step_desc: 'Return the frying pan to a medium-high heat with a drizzle of olive oil if needed. Add the onion and cook, stirring occasionally, untill just softened, 2-3 minutes. Add the capsicum and carrot and cook, tossing, until softened, 4-5 minutes. Add the baby spinach leaves and remaining garlic to the pan and cook until fragrant, 1 minutes.'},
        {id: 11, recipe_id: 2, step_number: 5, step_desc: 'Add the Thai red curry paste and the remaining butter to the pan and stir to coat. Cook untill fragrant, 1-2 minutes. Add the soy sauce, brown sugar and 2 tbs of water and stir to combine. Return the beef strips and any resting juices to the pan and toss to combine until heated through, 1-2 minutes. Add a squeeze of lime jiuce to taste.'},
        {id: 12, recipe_id: 2, step_number: 6, step_desc: 'Remove the makrut leaves from the jasmine rice. Divide the rice between bowls and top with the Thai beef stir-fry. Garnish with the remaining lime wedges.'},
      ]);
    });
};
