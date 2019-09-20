// users

exports.seed = function(knex, Promise) {

  return knex('users').insert([   
    {
      username: "user",
      password: "examplepass",
      firstname: "Some",
      lastname: "User",
      preferredname: null,
      email: "user@email.com",
      group_id: 1
     }, 
     {
       username: "john",
       password: "examplepass",
       firstname: "Johnathan",
       lastname: "Doe",
       preferredname: "John",
       email: "john@email.com",
       group_id: 2
      },
    {
      username: "jane",
      password: "examplepass",
      firstname: "Jane",
      lastname: "Doe",
      preferredname: null,
      email: "jane@email.com",
      group_id: 2
    }
  ]);

};