const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectID;

var uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) console.log(err);
});

const collection = client.db("movie_spots").collection("movies");

exports.allMovies = (req, res) => {
  collection
    .find({})
    .limit(50)
    .toArray(function (err, docs) {
      res.json(docs);
    });
};

exports.searchMovie = (req, res) => {
  collection
    .find({ Title: { $regex: req.body.title } })
    .project({ _id: 1, Title: 1, "Release Year": 1 })
    .limit(5)
    .toArray(function (err, docs) {
      res.json(docs);
    });
};

exports.searchMovieByTitle = (req, res) => {
  collection
    .find({ Title: req.query.title })
    .project({ _id: 0 })
    .toArray(function (err, docs) {
      res.json(docs);
    });
};
