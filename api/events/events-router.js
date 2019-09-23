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
    const foodforEvent = await Events.getFoodforEvent(id);

    const results = { 
      eventname: event.eventname, 
      description: event.description,
      eventdate: event.eventdate,
      eventtime: event.eventtime,
      location: event.location,
      username: event.username,
      food: foodforEvent
    }
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion

module.exports = router; 