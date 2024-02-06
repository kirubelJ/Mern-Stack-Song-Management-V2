const express = require("express");
router = express.Router();

const {
  PostSong,
  GetAllSongs,
  UpdateTitleByID,
  UpdateArtistByID,
  UpdateAlbumByID,
  UpdateGenreByID,
} = require("../controllers/controller");

//routes
router.post("/v1/song/add", PostSong); // add
router.get("/v1/song/getall", GetAllSongs); //read all
router.put("/v1/song/update/title/byid/:id", UpdateTitleByID);
router.put("/v1/song/update/artist/byid/:id", UpdateArtistByID);
router.put("/v1/song/update/album/byid/:id", UpdateAlbumByID);
router.put("/v1/song/update/genre/byid/:id", UpdateGenreByID);

module.exports = { router };
