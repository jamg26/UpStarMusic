const mongoose = require('mongoose');
const albumSchema = require('./album');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  Albums: [albumSchema]
});

const Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;
