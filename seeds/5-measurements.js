exports.seed = (knex, Promise) => {
  return knex('measurements').insert([
    { 
      id: 1,
      measurement_name: 'dash',
    },
    { 
      id: 2,
      measurement_name: 'cloves',
    },
    { 
      id: 3,
      measurement_name: 'g',
    },
    { 
      id: 4,
      measurement_name: 'packet',
    },
    { 
      id: 5,
      measurement_name: 'cups',
    },
    { 
      id: 6,
      measurement_name: 'tsp',
    },
    { 
      id: 7,
      measurement_name: 'knob',
    },
    { 
      id: 8,
      measurement_name: 'bunch',
    },
    { 
      id: 9,
      measurement_name: 'bag',
    },
    { 
      id: 10,
      measurement_name: '',
    }
  ])
}