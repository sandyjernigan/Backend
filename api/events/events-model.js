const db = require('../../data/dbConfig.js');


module.exports = {
  // Create
  addEvent,
  // Read
  getEvents,
  getAllEvents,
  getEventsByUsername,
  getEvent,
  getjustEvent,
  getFoodforEvent,
  getBringingbyFood,
  getGuests,
  getGuest,
  getGuestsbyEvent,
  // Update
  updateEvent,
  // Delete
  deleteEvent
};

//#region - CREATE

async function addEvent(input) {
  const results = await db('events').insert(input);
  return getjustEvent(results[0]);
}

//#endregion

//#region - READ 

// getEvents() - return all events 
function getEvents() {
  return db('events');
}

// getAllEvents() - return all events - detailed return
function getAllEvents() {
  return db('events')
  //.leftJoin('locations', 'events.location_id', 'locations.id')
  .join('users', 'users.id', 'events.user_id')
  .select(
    'events.id as eventid',
    'events.eventname', 
    'events.description', 
    'events.eventdate', 
    'events.eventtime',
    'events.location',
    // 'locations.location',
    'users.username'
  );
}

// getEventsByUsername(username) - return all events the user created
function getEventsByUsername(username) {
  return db('events')
  //.join('locations', 'locations.id', 'events.location_id')
  .join('users', 'users.id', 'events.user_id')
  .select(
    'events.id',
    'events.eventname', 
    'events.description', 
    'events.eventdate', 
    'events.eventtime',
    'events.location',
    //'locations.location',
    'users.username'
  ).where({ 'users.username': username });
}

// getEvent(id) - return 1 event by id
function getEvent(id) {
  return db('events')
  //.join('locations', 'locations.id', 'events.location_id')
  .join('users', 'users.id', 'events.user_id')
  .select(
    'events.id as eventid',
    'events.eventname', 
    'events.description', 
    'events.eventdate', 
    'events.eventtime',
    'events.location',
    //'locations.location',
    'users.username'
  )
  .where({ 'events.id': id }).first();
}

// getEvent(id) - return 1 event by id - simple only details from event table
function getjustEvent(id) {
  return db('events').where({ id }).first();
}

// getFoodforEvent() - return list of food by event id
function getFoodforEvent(id) {
  return db('food_needed')
  .join('foods', 'foods.id', 'food_needed.food_id')
  .join('categories', 'categories.id', 'foods.category_id')
  .select(
    'foods.id',
    'foods.foodname', 
    'food_needed.id as food_needed_id',
    'food_needed.quantity_needed',
    'foods.description', 
    'categories.category', 
    'foods.vegetarian',
    'foods.vegan',
    'foods.gutenfree',
  )
  .where({ 'food_needed.event_id': id });
}

// getBringingbyFood() - return list of guestname and quanity of food items guest is bringing
function getBringingbyFood(id) {
  return db('food_needed')
  .join('food_bringing', 'food_needed.id', 'food_bringing.food_needed_id')
  .join('guests', 'guests.id', 'food_bringing.guest_id')
  .select(
    'guests.guestname',
    'food_bringing.quantity'
  )
  .where({ 'food_needed.id': id });
}

// getGuests() - return a list of all guests
function getGuests() {
  return db('guests');
}

// getGuest(id) - return a guest by id
function getGuest(id) {
  return db('guests').where({ id });
}

// getGuestsbyEvent(id) - returns an array of guests for an event by event id
function getGuestsbyEvent(id) {
  return db('guests_events')
    .join('guests', 'guests.id', 'guests_events.guest_id')
    .select( 'guests.guestname', 'guests.guestemail', 'guests_events.RSVP' )
    .where({ 'guests_events.event_id': id });
}

//#endregion - Get

//#region - Update

function updateEvent(changes, id) {
  return db('events').where({ id }).update(changes)
  .then(count => {
    return getjustEvent(id);
  });
}

//#endregion

//#region - Delete

async function deleteEvent(id) {
  try {
    const results = await getjustEvent(id);
    const removeEvent = await db('events').where({ id }).del();
    if (removeEvent){
      return results;
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete event.' });
  }
}

//#endregion