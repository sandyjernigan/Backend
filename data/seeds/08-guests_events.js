// guests_events

exports.seed = function(knex, Promise) {

  return knex('guests_events').insert([   
    {
      event_id: 1,
      guest_id: 1,
      RSVP: "Yes"
    },
    {
      event_id: 1,
      guest_id: 2,
      RSVP: "No"
    },
    {
      event_id: 1,
      guest_id: 3,
      RSVP: null
    },
  ]);

};