// Testing for guests router
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const FoodRouter = require('./guests-model.js');

// This is in the testing layout stages Not sure if I should test all endpoints since I'm testing the models. 
// Mostly setting up to see about looking for glitches. Or see if something needs touching up to prevent errors.

describe('Guests Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('guests').truncate()
  })

  //#region - READ

/* work in progress

  // TODO: GET Guests - returns an array of all guests
  describe('test get `/api/guests` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  // TODO: Get Guest by id
  describe('test get `/api/guests/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - CREATE

  // TODO: add Guest
  describe('test post `/api/guests` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - Update

    // TODO: update Guest
    describe('test get`/api/guests/:id` ', () => {
      it('shouldDoThis', async () => {

        // Expected Input

        // call function -> 

        // expected results -> 
        
      })
    })

  //#endregion

  //#region - Delete 

    // TODO: delete Guest
    describe('test get`/api/guests/:id` ', () => {
      it('shouldDoThis', async () => {

        // Expected Input

        // call function -> 

        // expected results -> 
        
      })
    })

  //#endregion
  
*/

})