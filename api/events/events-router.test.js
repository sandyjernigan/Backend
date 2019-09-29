// Testing for events router
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const Events = require('./events-model.js');

// This is in the testing layout stages Not sure if I should test all endpoints since I'm testing the models. 
// Mostly setting up to see about looking for glitches. Or see if something needs touching up to prevent errors.

describe('Events Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('events').truncate()
  })

  //#region - READ

/* work in progress

  //TODO: GET all  - simple
  describe('test get`/api/events` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET all events - detailed
  describe('test get`/api/events/all` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET all events the user created
  describe('test get`/api/events/:username/all` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET event by id - detailed result
  describe('test get`/api/events/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET Guests by Event - returns an array of guests for an event by event id
  describe('test get`/api/events/:id/guests` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET Food Needed for Event
  describe('test get`/api/events/:id/foodneeded` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: GET Guest Bringing Item - returns an array of foods a guest is brining by guestid
  describe('test get`/api/events/:id/:guestid/bringing` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion 
  
  //#region - CREATE

  //TODO: add Event
  describe('test post `/api/events/` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: Add Guest to an Event
  describe('test post `/api/events/:id/addguest` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: Add Food Needed for Event
  describe('test post `/api/events/:id/addfood` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: Add Guest Bringing Item
  describe('test post `/api/events/:id/addBringing` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion

  //#region - Update

  //TODO: update Event
  describe('test put `/api/events/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //TODO: Update Guest Bringing Item
  describe('test put `/api/events/:id/updateBringing` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })

  //#endregion
  
  //#region - Delete 

  //TODO: delete Event
  describe('test delete `/api/events/:id` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  }) 

  //TODO: Remove Guest from an Event
  describe('test delete `/api/events/:id/removeguest` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })  

  //TODO: Remove Food Needed for Event
  describe('test delete `/api/events/:id/removefood` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })  

  //#endregion

*/

})