var express = require('express');
var router = express.Router();
var Character = require("../models/characterModel");
var User = require('../models/userModel');
var expressJWT = require('express-jwt');
var config = require('../config.js');
var ensureAuthenticated = expressJWT({ secret: config.SECRET_KEY });


router.get("/", function(req, res){
  Character.find(function(err, character){
    if(err){
      console.log(err);
    } else {
      res.send(character)
    }
  })
})

router.get('/characters/:id', function(req, res){
  console.log(clientID+ "Helllllooooo")
  Character.findById(req.params.id, function(err, character){
    if(err){
      console.log(err)
    } else {
      res.send(character)
    }
  })
})

router.get('/profile', ensureAuthenticated, function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log("this is an error")
    } else {
      res.send(user);
    }
  })
})

module.exports = router