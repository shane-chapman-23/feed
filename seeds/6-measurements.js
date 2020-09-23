exports.seed = (knex, Promise) => {
  return knex('measurements').insert([
    { 
      measurement_id: 1,
      measurement_name: 'dash',
    },
    { 
      measurement_id: 2,
      measurement_name: 'cloves',
    },
    { 
      measurement_id: 3,
      measurement_name: 'g',
    },
    { 
      measurement_id: 4,
      measurement_name: 'packet',
    },
    { 
      measurement_id: 5,
      measurement_name: 'cups',
    },
    { 
      measurement_id: 6,
      measurement_name: 'tsp',
    },
    { 
      measurement_id: 7,
      measurement_name: 'knob',
    },
    { 
      measurement_id: 8,
      measurement_name: 'bunch',
    },
    { 
      measurement_id: 9,
      measurement_name: 'bag',
    },
    { 
      measurement_id: 10,
      measurement_name: '',
    }
  ])
}