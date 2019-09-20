// foods

exports.seed = function(knex, Promise) {

  return knex('foods').insert([   
    {
      foodname: "Hamburgers",
      description: "hamburger meat",
      category_id: 2,
      vegetarian: false,
      vegan: false,
      gutenfree: null
    },
    {
      foodname: "Hamburger Buns",
      description: null,
      category_id: 1,
      vegetarian: true,
      vegan: null,
      gutenfree: false
    }
  ]);

};