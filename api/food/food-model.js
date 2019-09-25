const db = require('../../data/dbConfig.js');


module.exports = {
  // Create
  addCategory,
  // Read
  getFood,
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

function getFood() {
  return db('foods');
}

function getCategories() {
  return db('categories');
}

function getCategory(id) {
  return db('categories').where({ id }).first();
}

//#endregion - Get functions

//#region - Update

function updateCategory(changes, id) {
  return db('categories').where({ id }).update(changes)
  .then(count => {
    return getCategory(id);
  });
}

//#endregion

//#region - Delete

async function deleteCategory(id) {
  const results = await getCategory(id);
  const removeResults = db('categories').where({ id }).del();
  if (removeResults){
    return results;
  }
}

//#endregion