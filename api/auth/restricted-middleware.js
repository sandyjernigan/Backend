
module.exports = (req, res, next) => {
  // Check for cookie with login data, if exists go to next()
  if (req.session && req.session.user) {
    next();
  } else {
    try {
      res.redirect('/');
    } catch {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  }
};
