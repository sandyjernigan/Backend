const db = require('../../data/dbConfig.js');

module.exports = {
  // Create
  addFood, 
  addCategory,
  // Read
  getFood,
  getFoodbyID,
  getCategory,
  getCategories,
  // Update
  updateFood,
  updateCategory,
  // Delete
  deleteFood,
  deleteCategory
};

//#region - CREATE

async function addFood(input) {
  const results = await db('foods').insert(input);
  return getFoodbyID(results[0]);
}

async function addCategory(input) {
  const results = await db('categories').insert(input);
  return getCategory(results[0]);
}

//#endregion

//#region READ - Get functions

function getFood() {
  return db('foods');
}

function getFoodbyID(id) {
  return db('foods').where({ id }).first();
}

function getCategories() {
  return db('categories');
}

function getCategory(id) {
  return db('categories').where({ id }).first();
}

//#endregion - Get functions

//#region - Update

async function updateFood(changes, id) {
  const count = await db('foods').where({ id }).update(changes);
  return getFoodbyID(id);
}

async function updateCategory(changes, id) {
  const count = await db('categories').where({ id }).update(changes);
  return getCategory(id);
}

//#endregion

//#region - Delete 

async function deleteFood(id) {
  const results = await getFoodbyID(id);
  const removeResults = await db('foods').where({ id }).del();
  if (removeResults > 0){
    return results;
  }
}

async function deleteCategory(id) {
  const results = await getCategory(id);
  const removeResults = await db('categories').where({ id }).del();
  if (removeResults > 0){
    return results;
  }
}

//#endregion