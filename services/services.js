const constants = require("../config/constants");
const db = require("../db/index");

function getAll(cb) {
  db.movie.find(function(err, movies) {
    if (err) {
      console.log(err);
      cb([]);
    }
    cb(movies);
  });
}

function getById(id, cb) {
  db.movie.find({ id: id }, function(err, movie) {
    if (err) {
      console.log(err);
      cb([]);
    }
    cb(movie);
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
    }
    cb(movies);
  });
}

function getByPagination(offset, limit, cb) {
  db.movie
    .find(function(err, movies) {
      if (err) {
        console.log(err);
        cb([]);
      }
      cb(movies);
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
    }
    cb(movies);
  });
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByPagination,
  getBySorting
};
