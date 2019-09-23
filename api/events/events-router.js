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

//#endregion

module.exports = router;