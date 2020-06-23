const MongoClient = require('mongodb').MongoClient;

if (!process.env.MONGODB_URI) {
  throw new Error('Missing env variable MONGODB_URI');
}

let client = null;

module.exports = function getDb(fn) {
  if (client && !client.isConnected) {
    client = null;
    console.log('MONGO CLIENT DISCARDED');
  }

  if (client === null) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MONGO CLIENT INIT');
  } else if (client.isConnected) {
    console.log('MONGO CLIENT CONNECTED');
    return client.db("movie_spots").collection("movies");
  }

  return new Promise((resolve, reject) => {
    client.connect(err => {
      if (err) {
        client = null;
        console.error('MONGO CLIENT ERROR', err);
        return reject(err);
      }

      console.log('MONGO CLIENT connected');
      resolve(client.db("movie_spots").collection("movies"));
    });
  });
};
