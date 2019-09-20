// groups

exports.seed = function(knex, Promise) {

  return knex('groups').insert([   
    {
      groupname: 'Developers',
      description: 'Description of the group'
     },
    {
      groupname: 'John\'s Family',
      description: 'The family'
    }
  ]);

};