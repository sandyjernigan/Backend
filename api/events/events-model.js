const db = require('../../data/dbConfig.js');


module.exports = {
  getEvents,
};

// getEvents() - return all events 
async function getEvents() {
  return db('events');
}