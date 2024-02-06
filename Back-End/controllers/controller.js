const Song = require("../models/model");

//Create and save new Song
const PostSong = async (req, res) => {
  //console.log(req.body);
  try {
    const { new_title } = req.body;
    const { new_artist } = req.body;
    const { new_album } = req.body;
    const { new_genre } = req.body;
    //
    const newSong = new Song({
      title: new_title,
      artist: new_artist,
      album: new_album,
      genre: new_genre,
    });
    console.log(newSong);
    //
    const savedSong = await newSong.save();
    res.status(200).json({ success: true, data: savedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error.message });
  }
};

//const GetAllSongs
const GetAllSongs = async (req, res) => {
  try {
    const getAll = await Song.find();
    res.status(200).json({ success: true, data: getAll });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//find one by ID and update title
const UpdateTitleByID = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const UpdatedTitle = { title: req.body.UpdatedTitle };
    const UpdatedSong = await Song.findOneAndUpdate(query, UpdatedTitle);
    res.status(200).json({ success: true, data: UpdatedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//find one by ID and update title
const UpdateArtistByID = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const UpdatedArtist = { artist: req.body.UpdatedArtist };
    const UpdatedSong = await Song.findOneAndUpdate(query, UpdatedArtist);
    res.status(200).json({ success: true, data: UpdatedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//find one by ID and update album
const UpdateAlbumByID = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const UpdatedAlbum = { album: req.body.UpdatedAlbum };
    const UpdatedSong = await Song.findOneAndUpdate(query, UpdatedAlbum);
    res.status(200).json({ success: true, data: UpdatedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

//find one by ID and update genre
const UpdateGenreByID = async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const UpdatedGenre = { genre: req.body.UpdatedGenre };
    const UpdatedSong = await Song.findOneAndUpdate(query, UpdatedGenre);
    res.status(200).json({ success: true, data: UpdatedSong });
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error });
  }
};

module.exports = {
  PostSong,
  GetAllSongs,
  UpdateTitleByID,
  UpdateArtistByID,
  UpdateAlbumByID,
  UpdateGenreByID,
};
