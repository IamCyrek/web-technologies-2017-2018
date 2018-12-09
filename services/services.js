const constants = require("../config/constants");
const db = require("../db/index");
const agr = require("../db/agr");

function getAll(cb) {
  db.movie.find(function(err, movies) {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(movies);
    }
  });
}

function getById(id, cb) {
  db.movie.find({ id: id }, function(err, movie) {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(movie);
    }
  });
}

function getByTitle(title, cb) {
  db.movie.find({ title: { $regex: title, $options: "i" } }, function(
    err,
    movies
  ) {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(movies);
    }
  });
}

function getByPagination(offset, limit, cb) {
  db.movie
    .find(function(err, movies) {
      if (err) {
        console.log(err);
        cb([]);
      } else {
        cb(movies);
      }
    })
    .skip(offset)
    .limit(limit);
}

function getBySorting(field, direction, cb) {
  var query = {};
  query[field] = direction === constants.ASCENDING_ORDER ? 1 : -1;
  db.movie.find({}, null, { sort: query }, function(err, movies) {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(movies);
    }
  });
}

function postMovie(params) {
  return db.saveMovie(params);
}

function deleteMovie(id, cb) {
  db.movie.deleteOne({ id: id }, function(err, movies) {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(movies);
    }
  });
}

function voteCountByGroupOriginalLanguageWhereAdultIsSet(adultValue, cb) {
  agr.findMoviesWithAggregation(function(movies) {
    cb(movies);
  });
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByPagination,
  getBySorting,
  postMovie,
  deleteMovie,
  voteCountByGroupOriginalLanguageWhereAdultIsSet
};
