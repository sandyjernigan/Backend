const express = require('express');

const Router = require('./food-model.js');

const router = express.Router();

//#region - READ

// GET all food
router.get('/', async (req, res) => {
  try {
    const results = await Router.getFood();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET food by id
router.get('/:id/', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Router.getFoodbyID(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET all categories
router.get('/categories', async (req, res) => {
  try {
    const results = await Router.getCategories();
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
router.post('/categories', async (req, res) => {
  const input = req.body;

  try {
    const results = await Router.addCategory(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new cateogory.' });
  }
});

//#endregion

//#region - Update - PUT endpoints

// update Event
router.put('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const results = await Router.updateCategory(changes, id);
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find cateogory with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update cateogory.' });
  }
});

//#endregion

//#region - Delete - delete endpoints

// delete Event
router.delete('/categories/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Router.deleteCategory(id);
    console.log(id)
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find cateogory with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete cateogory.' });
  }
});

//#endregion

module.exports = router; 
