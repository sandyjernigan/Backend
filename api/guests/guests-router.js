const express = require('express');

const Guests = require('./guests-model.js');

const router = express.Router();

//#region - READ

// GET Guests - returns an array of all guests
router.get('/', async (req, res) => {

  try {
    const guests = await Guests.getGuests();

    res.json(guests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get guests.' });
  }
});

// Get Guest by id
router.get('/:id/', async (req, res) => {
  const { id } = req.params;

  try {
    const results = await Guests.getGuest(id);
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get a guest.' });
  }
});

//#endregion

//#region - CREATE - POST endpoints

// add Guest
router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const results = await Guests.addGuest(input);
    res.status(201).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new guest.' });
  }
});

//#endregion

//#region - Update - PUT endpoints

// update Guest
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const results = await Guests.updateGuest(changes, id);
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: 'Could not find Guest with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update Guest.' });
  }
});

//#endregion

//#region - Delete - delete endpoints

// delete Event
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const results = await Events.deleteEvent(id);
    
//     if (results) {
//       res.json(results);
//     } else {
//       res.status(404).json({ message: 'Could not find event with given id.' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to delete event.' });
//   }
// });

//#endregion

module.exports = router; 
