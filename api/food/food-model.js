const db = require('../../data/dbConfig.js');


module.exports = {
  // Create
  addCategory,
  // Read
  getCategory,
  getCategories,
  // Update
  updateCategory,
  // Delete
  deleteCategory
};

//#region - CREATE

async function addCategory(input) {
  const results = await db('categories').insert(input);
  return getCategory(results[0]);
}

//#endregion

//#region READ - Get functions

function getCategories() {
  return db('categories');
}

function getCategory(id) {
  return db('categories').where({ id }).first();
}

//#endregion - Get functions

//#region - Update

function updateCategory(changes, id) {
  // return db('events').where({ id }).update(changes)
  // .then(count => {
  //   return getjustEvent(id);
  // });
}

//#endregion

//#region - Delete

async function deleteCategory(id) {
  // const results = await getjustEvent(id);
  // const removeEvent = db('events').where({ id }).del();
  // if (removeEvent){
  //   return results;
  // }
}

//#endregion