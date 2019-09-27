// Testing for events model
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const Events = require('./events-model.js');

// Mostly setting up to look for glitches. Or see if something needs touching up to prevent errors.

describe('Events Model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('events').truncate()
  })

  //#region - CREATE
  describe('function addEvent', () => {
    it('Add a new event to database', async () => {

      // Expected Input
      const input = { 
        "eventname": "Autumn Bash",
        "description": "Company party for end of Summer, start of fall, and September birthdays!",
        "eventdate": "9-25-2019",
        "eventtime": "2:00 PM",
        "location": null,
        "user_id": 1
      };
      
      // call function -> addEvent()
      const results = await Events.addEvent(input);

      // expected results -> should return the object added to database.
      expect(results).toEqual({
        "id": 1,
        "eventname": "Autumn Bash",
        "description": "Company party for end of Summer, start of fall, and September birthdays!",
        "eventdate": "9-25-2019",
        "eventtime": "2:00 PM",
        "location": null,
        "user_id": 1 
      })
    })
  })

  // TODO:
  describe('function addGuesttoEvent', () => {

    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  // TODO:
  describe('function addFoodNeeded', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  // TODO:
  describe('function addBringing', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  //#endregion

  //#region - READ
  // TODO:
  describe('function getEvents', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getAllEvents', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getEventsByUsername', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getEvent', () => {
    
    it('shouldDoSomething', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getjustEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getFoodforEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getBringingbyFood', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getBringingbyGuest', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  // TODO:
  describe('function getGuestsbyEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  //#endregion
  
  //#region - Update
  // TODO:
  describe('function updateEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
   
  // TODO:
  describe('function updateBringing', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  //#endregion

   //#region - Delete
   
  // TODO:
  describe('function deleteEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
   
  // TODO:
  describe('function removeGuestfromEvent', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
   
  // TODO:
  describe('function removeFoodNeeded', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  //#endregion

})