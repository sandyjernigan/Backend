const express = require('express');

const FoodRouter = require('./food-model.js');

const router = express.Router();

//#region - READ

// GET all food
router.get('/', async (req, res) => {
  try {
    const results = await FoodRouter.getFood();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET food by id
router.get('/:id/', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await FoodRouter.getFoodbyID(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET all categories
router.get('/categories/all', async (req, res) => {
  try {
    const results = await FoodRouter.getCategories();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

// GET category by id
router.get('/categories/:id/', async (req, res) => {
  const { id } = req.params;
  
  try {
    const results = await FoodRouter.getCategory(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion

//#region - CREATE - POST endpoints

// add food
router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const results = await FoodRouter.addFood(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new food.' });
  }
});

// add category
router.post('/categories', async (req, res) => {
  const input = req.body;

  try {
    const results = await FoodRouter.addCategory(input);
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
    const results = await FoodRouter.updateCategory(changes, id);
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
    const results = await FoodRouter.deleteCategory(id);
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
