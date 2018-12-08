const constants = require("../config/constants");
const Sequelize = require("sequelize");
const model = require("../db/index");

function getAll() {
  return model.movie.findAll();
}

function getById(id) {
  return model.movie.findById(id);
}

function getByTitle(title) {
  return model.movie.findAll({
    where: Sequelize.where(Sequelize.fn("lower", Sequelize.col("title")), {
      [Sequelize.Op.like]: "%" + title.toLowerCase() + "%"
    })
  });
}

function getByPagination(offset, limit) {
  return model.movie.findAll({ offset, limit });
}

function getBySorting(field, direction) {
  if (direction === constants.ASCENDING_ORDER)
    return model.movie.findAll({ order: [[field, "ASC"]] });

  return model.movie.findAll({ order: [[field, "DESC"]] });
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByPagination,
  getBySorting
};
