const movies = require("../data.json");
const constants = require("../config/constants");

function getAll() {
  return movies;
}

function getById(id) {
  return movies.find(item => item.id === id);
}

function getByTitle(title) {
  return movies.filter(item =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );
}

function getByPagination(offset, limit) {
  return movies.slice(offset, offset + limit);
}

function getBySorting(field, direction) {
  const list = movies.sort((a, b) =>
    String(a[field]).localeCompare(String(b[field]))
  );

  if (direction === constants.ASCENDING_ORDER) return list;

  return list.reverse();
}

module.exports = {
  getAll,
  getById,
  getByTitle,
  getByPagination,
  getBySorting
};
