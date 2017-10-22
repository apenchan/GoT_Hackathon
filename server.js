var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var characterRoutes = require('./routes/characterRoutes');
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


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.static("node_modules"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/characters', characterRoutes);

app.get("/characters", function(req, res){
  Character.find(function(err, character){
    if(err){
      console.log(err);
    } else {
      res.send(character)
    }
  })
})

app.get('/characters/:id', function(req, res){
  Character.findById(req.params.id, function(err, character){
    if(err){
      console.log(err)
    } else {
      res.send(character)
    }
  })
})


app.listen(port);
console.log('===========================');
console.log('Server is running off: ' + port);
console.log('============================');