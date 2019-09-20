const db = require('../data/db-config.js');


module.exports = {
  getEvents,
};

// getEvents() - return all events 
async function getEvents() {
  const results = await db('events');
  return results
}