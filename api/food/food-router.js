const express = require('express');

const Events = require('./food-model.js');

const router = express.Router();

//#region - READ

// GET all categories
router.get('/categories', async (req, res) => {
  try {
    const results = await Events.getCategories();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET category by id
router.get('/categories/:id/', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Events.getCategory(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion

//#region - CREATE - POST endpoints

// add category
router.post('/food/category', async (req, res) => {
  const input = req.body;

  try {
    const results = await Events.addCategory(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new event.' });
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

//#endregion

//#region - Delete - delete endpoints

// delete Event
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Events.deleteEvent(id);
    console.log(id)
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find event with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete event.' });
  }
});

//#endregion

module.exports = router; 
