// categories

exports.seed = function(knex, Promise) {

  return knex('categories').insert([   
    {
      category: "bread",
      description: "breads made from either flour, oats, rye, etc"
     },
    {
      category: 'meat',
      description: 'meats'
    }
  ]);

};