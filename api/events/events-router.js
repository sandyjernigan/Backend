const express = require('express');

const Events = require('./events-model.js');

const router = express.Router();

//#region - READ

// GET all  - simple
router.get('/', async (req, res) => {
  try {
    const results = await Events.getEvents();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET all events - detailed
router.get('/all', async (req, res) => {
  try {
    const results = await Events.getAllEvents();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET all events the user created
router.get('/:username/all', async (req, res) => {
  const { username } = req.params;

  try {
    const events = await Events.getEventsByUsername(username);

    // This map function returns an array of Promises. 
    const eventswithGuests = events.map( async (event) => {
      try {
        const guests = await Events.getGuestsbyEvent(event.id);
        event.guests = guests;
        return event
      } catch (err) {
        console.log("No results.");
      }
    }); 
    
    Promise.all(eventswithGuests).then((results) => {  
      res.json(results);
    });
    
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET event - detailed result
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events.getEvent(id);
    const food = await Events.getFoodforEvent(id);
    const guests = await Events.getGuestsbyEvent(id);

    // This map function returns an array of Promises. 
    const foodbringing = food.map(async (food) => {
      const foodid = food.food_needed_id;
      try {
        const bringing = await Events.getBringingbyFood(foodid);
        food.bringing = bringing;
        return bringing
      } catch (err) {
        console.log("No results.");
      }
    });
    
    Promise.all(foodbringing).then((bringing) => {      
      const results = { 
        eventname: event.eventname, 
        description: event.description,
        eventdate: event.eventdate,
        eventtime: event.eventtime,
        location: event.location,
        username: event.username,
        food,
        guests
      }
      res.json(results);
    });

  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET Guests by Event - returns an array of guests for an event by event id
router.get('/:id/guests', async (req, res) => {
  const { id } = req.params;

  try {
    const guests = await Events.getGuestsbyEvent(id);

    res.json(guests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get guests.' });
  }
});

// GET Food Needed for Event
router.get('/:id/foodneeded', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Events.getFoodforEvent(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET Guest Bringing Item - returns an array of foods a guest is brining by guestid
router.get('/:id/:guestid/bringing', async (req, res) => {
  const { id, guestid } = req.params;
  
  try {
    const results = await Events.getBringingbyGuest(id, guestid);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion 

//#region - CREATE - POST endpoints

// add Event
router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const results = await Events.addEvent(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new event.' });
  }
});

// Add Guest to an Event
router.post('/:id/addguest', async (req, res) => {
  const input = req.body;
  input.event_id = req.params.id;

  try {
    const results = await Events.addGuesttoEvent(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add guest to the event.' });
  }
});

// Add Food Needed for Event
router.post('/:id/addfood', async (req, res) => {
  const input = req.body;
  input.event_id = req.params.id;

  try {
    const results = await Events.addFoodNeeded(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add food needed to the event.' });
  }
});

// Add Guest Bringing Item<
router.post('/:id/addBringing', async (req, res) => {
  // input should be an object with food_needed_id, guest_id, and quantity
  const input = req.body;

  try {
    const results = await Events.addBringing(input, req.params.id);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add food guest is bringing to the event.' });
  }
});

//#endregion

//#region - Update - PUT endpoints

// update Event
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const results = await Events.updateEvent(changes, id);
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find event with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update event.' });
  }
});

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

module.exports = router; 
