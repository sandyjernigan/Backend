// food_needed

exports.seed = function(knex, Promise) {

  return knex('food_needed').insert([   
    {
      event_id: 1,
      food_id: 1,
      quantity_needed: 24,
    },
    {
      event_id: 1,
      food_id: 2,
      quantity_needed: 24,
    },
  ]);

};