const services = require("../services/services");
const constants = require("../config/constants");

const all = (req, res) => {
  res.send(services.getAll());
};

const id = (req, res) => {
  res.send(services.getById(Number(req.params.id)));
};

const title = (req, res) => {
  res.send(services.getByTitle(String(req.params.title)));
};

const pagination = (req, res) => {
  res.send(
    services.getByPagination(
      Number(req.params.offset),
      Number(req.params.limit)
    )
  );
};

const sortingWithDirection = (req, res) => {
  res.send(services.getBySorting(req.params.field, req.params.direction));
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
