// guests_events

exports.seed = function(knex, Promise) {

  return knex('guests_events').insert([   
    {
      event_id: 1,
      guest_id: 1,
      attending: "going"
    },
    {
      event_id: 1,
      guest_id: 1,
      attending: "not going"
    },
    {
      event_id: 1,
      guest_id: 1,
      attending: null
    },
  ]);

};