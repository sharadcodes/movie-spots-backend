const express = require("express");
const router = express.Router();

const {
  allMovies,
  searchMovie,
  searchMovieByTitle,
} = require("../controllers/movies");

// routes
router.get("/all", allMovies);
router.post("/search", searchMovie);
router.get("/search/single", searchMovieByTitle);

module.exports = router;
