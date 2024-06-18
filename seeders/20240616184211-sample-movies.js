'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      title: 'Inception',
      genre: 'Sci-Fi',
      duration: 148,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Interstellar',
      genre: 'Sci-Fi',
      duration: 170,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
