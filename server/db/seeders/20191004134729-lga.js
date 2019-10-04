'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lgas', [
      {
        code: 'KJA',
      },
      {
        code: 'IKD',
      },
      {
        code: 'VIS',
      },
      {
        code: 'APP',
      },
      {
        code: 'AJG',
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Lgas', null, {});
  }
};
