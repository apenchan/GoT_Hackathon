var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  name: String,
  mainImg: String,
  description: String,
  img: [String]
})

var Character = mongoose.model("Character", characterSchema);

module.exports = Character;