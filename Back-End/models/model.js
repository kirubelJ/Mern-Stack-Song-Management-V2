const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//define the Schema interface.
const songSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

//Accessing a Model
const Song = mongoose.model("Song", songSchema);

module.exports = Song;
