const services = require("../services/services");
const constants = require("../config/constants");

const all = (req, res) => {
  services.getAll(function(movies) {
    res.send(movies);
  });
};

const id = (req, res) => {
  services.getById(Number(req.params.id), function(movie) {
    res.send(movie);
  });
};

const title = (req, res) => {
  services.getByTitle(String(req.params.title), function(movies) {
    res.send(movies);
  });
};

const pagination = (req, res) => {
  services.getByPagination(
    Number(req.params.offset),
    Number(req.params.limit),
    function(movies) {
      res.send(movies);
    }
  );
};

const sortingWithDirection = (req, res) => {
  services.getBySorting(req.params.field, req.params.direction, function(
    movies
  ) {
    res.send(movies);
  });
  //res.send(services.getBySorting(req.params.field, req.params.direction));
};

const sorting = (req, res) => {
  req.params.direction = constants.ASCENDING_ORDER;
  sortingWithDirection(req, res);
};

module.exports = {
  all,
  id,
  title,
  pagination,
  sorting,
  sortingWithDirection
};
