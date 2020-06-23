const mongodb = require("mongodb");

let db = null;

// Connect to mongo
const uri = process.env.MONGODB_URI;
const opts = { useUnifiedTopology: true };
const connect = async () => {
  console.log("Connecting to database...");
  let client = await mongodb.MongoClient.connect(uri, opts).catch((error) => {
    console.log("Error connecting to database: " + err);
  });
  if (client) {
    console.log("Database connected.");
    db = client.db("movie_spots");
  }
  return client;
};

// Get database connection
const getDb = async () => {
  if (!db) await connect();
  return db;
};

// Get Collection
exports.getCollection = async (name) => {
  let database = await getDb();
  let collection = await database.collection(name);
  if (!collection)
    throw new Error("(mongo) Cannot get collection named " + name);
  return collection;
};
