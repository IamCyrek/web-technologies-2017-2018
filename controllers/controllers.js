const services = require("../services/services");
const constants = require("../config/constants");

const all = (req, res) => {
  services.getAll().then(movies => res.send(movies));
};

const id = (req, res) => {
  services.getById(Number(req.params.id)).then(movie => res.send(movie));
};

const title = (req, res) => {
  services
    .getByTitle(String(req.params.title))
    .then(movies => res.send(movies));
};

const pagination = (req, res) => {
  services
    .getByPagination(Number(req.params.offset), Number(req.params.limit))
    .then(movies => res.send(movies));
};

const sortingWithDirection = (req, res) => {
  services
    .getBySorting(req.params.field, req.params.direction)
    .then(movies => res.send(movies));
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
