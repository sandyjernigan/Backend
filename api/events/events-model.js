const db = require('../../data/dbConfig.js');


module.exports = {
  getEvents,
  getAllEvents,
  getEvent,
  getFoodforEvent,
  getBringingbyFood,
  getGuests,
  getGuest
};

// getEvents() - return all events 
function getEvents() {
  return db('events');
}

// getAllEvents() - return all events - detailed return
function getAllEvents() {
  return db('events')
  .join('locations', 'locations.id', 'events.location_id')
  .join('users', 'users.id', 'events.user_id')
  .select(
    'events.id as eventid',
    'events.eventname', 
    'events.description', 
    'events.eventdate', 
    'events.eventtime',
    'locations.location',
    'users.username'
  );
}

// getEvent(id) - return 1 event by id
function getEvent(id) {
  return db('events')
  .join('locations', 'locations.id', 'events.location_id')
  .join('users', 'users.id', 'events.user_id')
  .select(
    'events.id as eventid',
    'events.eventname', 
    'events.description', 
    'events.eventdate', 
    'events.eventtime',
    'locations.location',
    'users.username'
  )
  .where({ 'events.id': id }).first();
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

// getFoodforEvent() - return list of food by event id
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

//   "foods": [
//     { 
//       "foodname": "Hamburgers",
//       "quantity": 24,
//       "description": "hamburger meat",
//       "category": "meat",
//       "vegetarian" : false,
//       "vegan" : false,
//       "gutenfree" : null,
//         {
//         "guestname": "guest2", // this is marked as bringing
//         "quantity": 12 // qty guest plans to bring
//         },
//       ]
//     },
//     { 
//       "foodname": "Hamburger Buns",
//       "quantity": 24,
//       "description": null,
//       "category": "bread",
//       "vegetarian" : true,
//       "vegan" : null,
//       "gutenfree" : false,
//       "bringing": null // if null no one is selected as bringing yet
//     },
//   ],
//   "guests": [ // array of guests 
//     "guest_id": 1,
//     "guest_id": 2
//   ]
// }