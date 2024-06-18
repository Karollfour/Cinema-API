'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Showtimes', [
      {
        time: new Date('2024-06-17T09:00:00'), 
        movieId: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time: new Date('2024-06-18T10:30:00'),
        movieId: 4, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Showtimes', null, {});
  }
};
