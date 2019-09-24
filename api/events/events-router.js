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
    const foodbringing = await food.map(async (x) => {
      const bringing = await Events.getBringingbyFood(x.food_needed_id)
      console.log(bringing);
      if (bringing) {
        if ( bringing.guestname || bringing.quantity ) {
          const { guestname, quantity } = bringing;
          console.log(guestname)
          x.bringing = { guestname, quantity }  
        } else {
          console.log("guestname or quantity doesn't exist.")
        }
      } 
      console.log(x.bringing);
      return x
    }); 
    console.log(foodbringing)

    const results = { 
      eventname: event.eventname, 
      description: event.description,
      eventdate: event.eventdate,
      eventtime: event.eventtime,
      location: event.location,
      username: event.username,
      food,
      foodbringing
    }
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});


router.get('/:id/:foodid', async (req, res) => {
  const { id, foodid } = req.params;

  try {
    const food = await Events.getFoodforEvent(id);
    //const foodAddBringing = food.map(bringingbyFood); 
    const bringing = await Events.getBringingbyFood(foodid);
    //console.log(foodAddBringing)

    //const foodBringingbyFood = await Events.getBringingbyFood(id)
  
  res.json(bringing);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

//#endregion

module.exports = router; 

function getGuestbyID(id) {
  return Events.getGuest(id);
}
