const mongoose = require("mongoose");
const movies = require("../data.json");

mongoose.connect(
  "mongodb://localhost/test",
  { useNewUrlParser: true }
);

var movieSchema = require("./schemas/movie");

var movie = mongoose.model("Movie", movieSchema.movieSchema);

movie.countDocuments().then(length => {
  if (!(length > 0)) {
    movies.forEach(mov => {
      Object.assign(mov, { _id: new mongoose.Types.ObjectId() });
      const newMovie = new movie(mov);
      newMovie.save(function(err, movie) {
        if (err) return console.log(err);
        console.log(movie);
      });
    });
  }
});

function saveMovie(params) {
  var newMovie = new movie({
    _id: new mongoose.Types.ObjectId(),
    id: 10,
    vote_count: params.vote_count,
    video: params.video,
    vote_average: params.vote_average,
    title: params.title,
    popularity: params.popularity,
    poster_path: params.poster_path,
    original_language: params.original_language,
    original_title: params.original_title,
    genre_ids: params.genre_ids,
    backdrop_path: params.backdrop_path,
    adult: params.adult,
    overview: params.overview,
    release_date: params.release_date
  });
  newMovie.save(function(err, movie) {
    if (err) return console.log(err);
    console.log(movie);
  });

  return newMovie;
}

module.exports = { movie, saveMovie };
