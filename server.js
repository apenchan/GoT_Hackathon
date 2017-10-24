var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require('./models/passport');
var request = require('request');
var characterRoutes = require('./routes/characterRoutes');
var authRoutes = require('./routes/authRoutes');
var config = require('./config.js');
var expressJWT = require('express-jwt');
var ensureAuthenticated = expressJWT({ secret: config.SECRET_KEY });
// var clientID = 'Client-ID ' + process.env.IMGUR_CLIENT_ID
var port = process.env.PORT || 3000;


var db = process.env.MONGODB_URI || "mongodb://localhost/got_app";
mongoose.connect(db);

var Character = require('./models/characterModel');

// var character1 = new Character({
//   name: "Jon Snow",
//   mainImg: "http://media.thisisinsider.com/images/57b4cabb04732f18008b4e47-750-563.jpg",
//   description: "The bastard and new King of the North",
// })
// var character2 = new Character({
//   name: "Daenerys Targaryen",
//   mainImg: "http://i.dailymail.co.uk/i/pix/2016/09/20/09/1A28B60D000005DC-0-image-m-39_1474360572986.jpg",
//   description: "Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons",
// })
// var character3 = new Character({
//   name: "Cersei Lannister",
//   mainImg: "https://upload.wikimedia.org/wikipedia/en/9/94/Cersei_Lannister-Lena_Headey.jpg",
//   description: "Cersei of the House Lannister, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms. ",
// })

// character1.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character2.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character3.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })


// var character4 = new Character({
//   name: "Sansa Stark",
//   mainImg: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/SophieTurnerasSansaStark.jpg/220px-SophieTurnerasSansaStark.jpg",
//   description: "Lady of Winterfell",
// })
// var character5 = new Character({
//   name: "Arya Stark",
//   mainImg: "http://img.wennermedia.com/920-width/rehost2f20162f92f132-14e00cfc-8e11-467f-90b2-cf60f7461f9a.jpg",
//   description: "",
// })
// var character6 = new Character({
//   name: "Eddard Stark",
//   mainImg: "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/02/BostonGlobe.com/EditorialOpinion/Images/stark-big.jpg",
//   description: "Warden of the North",
// })
// var character7 = new Character({
//   name: "Tyrion Lannister",
//   mainImg: "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/e/ed/Tyrion.jpg/revision/latest?cb=20160519164818",
//   description: "Lord of Casterly Rock",
// })
// var character8 = new Character({
//   name: "Jorah Mormont",
//   mainImg: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Jorah_Mormont-Iain_Glen.jpg/220px-Jorah_Mormont-Iain_Glen.jpg",
//   description: "Lord of Bear Island",
// })

// character4.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character5.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character6.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character7.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// character8.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })



//MIDDLEWARE
app.use(passport.initialize());
app.use(express.static('public'));
app.use(express.static("node_modules"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/characters', characterRoutes);
app.use('/auth', authRoutes);

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});



// var ensureAuthenticated = function(req, res, next) {
//   if(req.user.authenticated){
//     return next();
//   }else {
//     console.log("still not authenticated")
//   }
// }
// app.use('/characters', characterRoutes);

// app.get("/characters", function(req, res){
//   Character.find(function(err, character){
//     if(err){
//       console.log(err);
//     } else {
//       res.send(character)
//     }
//   })
// })

// app.get('/characters/:id', function(req, res){
//   console.log(clientID+ "Helllllooooo")
//   Character.findById(req.params.id, function(err, character){
//     if(err){
//       console.log(err)
//     } else {
//       res.send(character)
//     }
//   })
// })

// app.get('/images', )


app.listen(port);
console.log('===========================');
console.log('Server is running off: ' + port);
console.log('============================');