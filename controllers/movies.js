const { getCollection } = require("../dbUtils.js");

exports.allMovies = (req, res) => {
  getCollection("movies")
    .then((coll) => {
      coll
        .find({})
        .limit(50)
        .toArray(function (err, docs) {
          if (err) {
            res.json(err);
            console.log(err);
          }
          res.json(docs);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.searchMovie = (req, res) => {
  getCollection("movies")
    .then((coll) => {
      coll
        .find({ Title: new RegExp(`.*${req.body.title}.*`, "i") })
        .project({ _id: 1, Title: 1, "Release Year": 1 })
        .limit(5)
        .toArray(function (err, docs) {
          res.json(docs);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.searchMovieByTitle = (req, res) => {
  getCollection("movies")
    .then((coll) => {
      coll
        .find({ Title: req.query.title })
        .project({ _id: 0 })
        .toArray(function (err, docs) {
          res.json(docs);
        });
    })
    .catch((err) => {
      res.json(err);
    });
};
