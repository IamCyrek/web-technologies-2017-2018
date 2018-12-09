const mongoose = require("mongoose");
const movies = require("../data.json");

mongoose.connect(
  "mongodb://localhost/test",
  { useNewUrlParser: true }
);

var movieSchema = require("./schemas/movie");

var movie = mongoose.model("Movie", movieSchema);

movie.countDocuments().then(length => {
  if (!(length > 0)) {
    movies.forEach(movie => {
      Object.assign(movie, { _id: new mongoose.Types.ObjectId() });
      const newMovie = new Movie(movie);
      newMovie.save(function(err, movie) {
        if (err) return console.log(err);
        console.log(movie);
      });
    });
  }
});

module.exports = { movie };
