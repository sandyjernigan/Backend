// Testing for foods router
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const FoodRouter = require('./food-model.js');

// This is in the testing layout stages Not sure if I should test all endpoints since I'm testing the models. 
// Mostly setting up to see about looking for glitches. Or see if something needs touching up to prevent errors.

describe('Foods Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('foods').truncate()
  })

  //#region - READ

  // TODO: GET all  - simple
  describe('test get`/api/food` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  /* work in progress

  // TODO: GET food by id
  describe('test get`/api/food/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: GET all categories
  describe('test get`/api/food/categories/all` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: GET category by id
  describe('test get`/api/food/categories/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - CREATE - POST endpoints

  // TODO: add food
  describe('test post`/api/food` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: add category
  describe('test post`/api/food/categories` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - Update - PUT endpoints

  // TODO: update Food
  describe('test put `/api/food/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: update Cateogory
  describe('test put `/api/food/categories/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - Delete - delete endpoints

  // TODO: delete cateogory
  describe('test delete `/api/food/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: delete cateogory
  describe('test get`/api/food/categories/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion
*/

})