// locations

exports.seed = function(knex, Promise) {

  return knex('locations').insert([   
    {
      location: "John's Backyard",
      description: "At John and Jane's house"
     },
    {
      location: 'The Hudson Park',
      description: 'At the park'
    }
  ]);

};