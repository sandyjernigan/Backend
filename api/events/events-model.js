const db = require('../../data/dbConfig.js');


module.exports = {
  getEvents,
  getAllEvents
};

// getEvents() - return all events 
function getEvents() {
  return db('events');
}

// getAllEvents() - return all events - detailed return
function getAllEvents() {
  return db('events');
}
//.join('locations', 'locations.id', 'events.location_id')
//.join('users', 'users.id', 'events.user_id')
// .select(
//   'events.eventname', 
//   'events.description', 
//   'events.eventdate', 
//   'events.eventtime',
  //'locations.location',
  //'users.username'
// );

//   "foods": [
//     { 
//       "foodname": "Hamburgers",
//       "quantity": 24,
//       "description": "hamburger meat",
//       "category": "meat",
//       "vegetarian" : false,
//       "vegan" : false,
//       "gutenfree" : null,
//       "bringing": [
//         {
//         "guestname": "guest1", // this is marked as bringing
//         "quantity": 12 // qty guest plans to bring
//         },
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