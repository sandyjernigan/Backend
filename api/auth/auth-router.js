const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'secret should be set in env';

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
      // use function to generate token
      const token = generateToken(saved);
      res.status(201).json({user: saved, token});
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
        // jwt should be generated
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
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
router.get('/logout', (req, res) => {
  // TODO: implement logout
  // Checking to see if possible to edit token, right now this does nothing
});

// Update User **Endpoint:** `/api/auth/user/{id}` 
router.put('/user/{id}', (req, res) => {
  // TODO: Add function to update user
});

// Delete User **Endpoint:** `/api/auth/user/{id}` 
router.delete('/user/{id}', (req, res) => {
  // TODO: Add function to delete user
});

function generateToken(user) {
  const payload = {
    sub: 'user token',
    id: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d', // expires in 1 day
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;