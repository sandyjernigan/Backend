const router = require('express').Router();
const bcrypt = require('bcryptjs');
const restricted = require('./restricted-middleware.js');

// User Models
const Users = require('./users-model.js');

// Register **Endpoint:** `/api/auth/register` 
router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
        
      // Add Cookie that contains the user name
      req.session.user = username;

      res.status(201).json({user: username});
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Login **Endpoint:** `/api/auth/login` 
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        
        // Add Cookie that contains the user name
        req.session.user = username;
        
        res.status(200).json({
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ message: 'Invalid Request. Please check the username and password submitted.' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Log Out **Endpoint:** `/api/auth/logout` 
router.get('/logout', restricted, (req, res) => {
  // TODO: implement logout
  // Checking to see if possible to edit token, right now this does nothing
});

// View Users **Endpoint:** `/api/auth/users` 
router.get('/users', restricted, async (req, res) => {
  // lookup list of all users - testing only - this endpoint should be not be public.
  try {
    const results = await Users.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get results.' });
  }
});

module.exports = router;