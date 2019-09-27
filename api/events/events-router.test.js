// Testing for events model
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const Events = require('./events-model.js');

// This is in the testing layout stages Not sure if I should test all endpoints since I'm testing the models. 

describe('Events Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('events').truncate()
  })

  //#region - READ

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

  //TODO: 
  describe('test `/api/events/` ', () => {
    it('shouldDoThis', async () => {

      // Expected Input

      // call function -> 

      // expected results -> 
      
    })
  })
})
/* 


// 
router.post('/'

// 
router.post('/'

// Add Food Needed for Event
router.post('/:id/addfood'

// Add Guest Bringing Item<
router.post('/:id/addBringing',

//#endregion

//#region - Update - PUT endpoints

// update Event
router.put('/:id'

// Update Guest Bringing Item<
router.put('/:id/updateBringing', async (req, res) => {
  // input should be an object with food_needed_id and guest_id
  const input = req.body;

  try {
    const results = await Events.updateBringing(input, req.params.id);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update food guest is bringing to the event.' });
  }
});

//#endregion

//#region - Delete - delete endpoints

// delete Event
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Events.deleteEvent(id);
    
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find event with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete event.' });
  }
});

// Remove Guest from an Event
router.delete('/:id/removeguest', async (req, res) => {
  const input = req.body;
  input.event_id = req.params.id;

  try {
    const results = await Events.removeGuestfromEvent(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove guest from the event.' });
  }
});

// Remove Food Needed for Event
router.delete('/:id/removefood', async (req, res) => {
  const input = req.body;
  input.event_id = req.params.id;

  try {
    const results = await Events.removeFoodNeeded(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove food needed for the event.' });
  }
});

//#endregion
*/