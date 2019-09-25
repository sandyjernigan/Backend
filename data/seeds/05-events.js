// events

exports.seed = function(knex, Promise) {

  return knex('events').insert([   
    {
      eventname: "John's First Potluck",
      description: "Birthday Party Potluck for Jane.",
      eventdate: "8-23-2019",
      eventtime: "6:00 PM",
      location: "John's Backyard",
      user_id: 2
    }
  ]);

};