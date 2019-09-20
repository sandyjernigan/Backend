// food_bringing

exports.seed = function(knex, Promise) {

  return knex('food_bringing').insert([   
    {
      food_needed_id: 1,
      guest_id: 3,
      quantity: 12
    },
    {
      food_needed_id: 1,
      guest_id: 2,
      quantity: 12
    },
  ]);

};