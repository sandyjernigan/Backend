const db = require('../../data/dbConfig.js');


module.exports = {
  // Create
  addGuest,
  // Read
  getGuests,
  getGuest,
  // Update
  updateGuest,
  // Delete
  deleteGuest
};

//#region - CREATE

async function addGuest(input) {
  const results = await db('guests').insert(input);
  return getjustEvent(results[0]);
}

//#endregion

//#region - READ 


// getGuests() - return a list of all guests
function getGuests() {
  return db('guests');
}

// getGuest(id) - return a guest by id
function getGuest(id) {
  return db('guests').where({ id });
}

//#endregion - Get

//#region - Update

function updateGuest(changes, id) {
  return db('guests').where({ id }).update(changes)
  .then(count => {
    return getGuest(id);
  });
}

//#endregion

//#region - Delete

async function deleteGuest(id) {
  const results = await getGuest(id);
  const removeResults = await db('guests').where({ id }).del();
  if (removeResults){
    return results;
  }
}

//#endregion