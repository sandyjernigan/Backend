// guests

exports.seed = function(knex, Promise) {

  return knex('guests').insert([   
    {
      guestname: "Jane",
      guestemail: "jane@email.com",
      user_id: 3
    },
    {
      guestname: "Jack",
      guestemail: "jack@email.com",
      user_id: null
    },
    {
      guestname: "Jill",
      guestemail: "jill@email.com",
      user_id: null
    }
  ]);

};