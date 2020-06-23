# Movie Spots Backend

Backend for Movie Spots webapp
#### API deployed at Heroku

[https://movie-spots.herokuapp.com](https://movie-spots.herokuapp.com/api/all)

#### Front End Code Repository
[https://github.com/sharadcodes/movie-spots](https://github.com/sharadcodes/movie-spots)

---

## Libraries and Framerworks

* **Express**
* **MongoDB**
* **CORS**
* **csvtojson**

---

## LOCAL SETUP GUIDE

1. Either clone or download the repository, for cloning run
  ```bash
  git clone https://github.com/sharadcodes/movie-spots-backend.git
  ```
2. Change directory to **movie-spots-backend**
  ```bash
  cd movie-spots-backend
  ```
3. Run 
  ```bash
  npm install
  ```
4. Export the environment variable **MONGODB_URI**
  ```bash
  export MONGODB_URI=mongodb://localhost:27017/
  ```
5. Import CSV data by running `node data/migrate.js`  
6. Start the server using `npm start`

---

## API DOCS

This API is deployed at [https://movie-spots.herokuapp.com](https://movie-spots.herokuapp.com).

#### API Endpoints
* (GET) https://movie-spots.herokuapp.com/api/all (Returns 50 Movies)
* (POST) https://movie-spots.herokuapp.com/api/search/ 
  Expects `Content-Type: application/json` with body as follows:
  ```js
  {
    title: "Movie Name"
  }
  ```
  returns the json response of all the matching movie title name with limit of 5.
* (GET) https://movie-spots.herokuapp.com/api/search/single?title=<Movie Title\>
  returns the json response of all the matching movie title name with no limit.
