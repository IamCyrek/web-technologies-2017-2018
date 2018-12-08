const Sequelize = require("sequelize");

module.exports = function(sequelize) {
  return sequelize.define(
    "movies",
    {
      vote_count: Sequelize.INTEGER,
      video: Sequelize.BOOLEAN,
      vote_average: Sequelize.DOUBLE,
      title: Sequelize.STRING,
      popularity: Sequelize.DOUBLE,
      poster_path: Sequelize.STRING,
      original_language: Sequelize.STRING,
      original_title: Sequelize.STRING,
      backdrop_path: Sequelize.STRING,
      adult: Sequelize.BOOLEAN,
      overview: Sequelize.STRING,
      release_date: Sequelize.STRING
    },
    { timestamps: false }
  );
};
