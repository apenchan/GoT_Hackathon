var express = require('express');
var router = express.Router();
var passport = require('../models/passport');

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' })
);

router.get('/facebook/callback',
passport.authenticate('facebook', { 
                                    failureRedirect: '/login' }),
                                    
  function(req, res) {
    res.redirect('/authorization?token=' + req.user.token + "&name=" + req.user.name);
  });

module.exports = router;