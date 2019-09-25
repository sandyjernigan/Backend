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

// GET all events - detailed TODO: Working on this endpoint, need to add foreach loop
router.get('/all', async (req, res) => {
  try {
    const results = await Events.getAllEvents();
    res.json(results);
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
    const foodbringing = food.map(async (x) => {
      const foodid = x.food_needed_id;
      try {
        const bringing = await Events.getBringingbyFood(foodid);
        x.bringing = bringing;
        return x
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

//#endregion

module.exports = router; 

