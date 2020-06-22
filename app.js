const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const moviesRoute = require("./routes/movies");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", moviesRoute);

// PORT
const port = process.env.PORT || 5000;

// Starting server
app.listen(port, () => {
  console.log(`Server up & running on http://localhost:${port}`);
});
