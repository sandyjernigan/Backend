// guests

exports.seed = function(knex, Promise) {

  return knex('guests').insert([   
    {
      guestname: "Jane",
      guestemail: "jane@email.com",
      user_id: 3,
      group_id: 2
    },
    {
      guestname: "Jack",
      guestemail: "jack@email.com",
      user_id: null,
      group_id: null
    },
    {
      guestname: "Jill",
      guestemail: "jill@email.com",
      user_id: null,
      group_id: null
    }
  ]);

};