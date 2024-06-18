const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./Movie');  // Corrigir aqui se necessário

const Showtime = sequelize.define('Showtime', {
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: 'id',
    },
  },
});

Showtime.belongsTo(Movie);

module.exports = Showtime;


