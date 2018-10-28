const movies = require('../data.json');
const constants = require('../config/constants');

function getAll() {
  return movies;
}

function getById(id) {
  return movies.find(item => item.id === id);
}

function getByTitle(title) {
  return movies.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
}

function getByPagination(offset, limit) {
  return movies.slice(offset, offset + limit);
}

function getBySorting(field, direction) {
  const list = movies.sort((a, b) => String(a[field]).localeCompare(String(b[field])));

  if (!String(direction).toLowerCase().localeCompare(constants.ASCENDING_ORDER)) return list;

  if (!String(direction)
    .toLowerCase()
    .localeCompare(constants.DESCENDING_ORDER)) return list.reverse();

  return [];
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByPagination,
  getBySorting,
};
