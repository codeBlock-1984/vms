'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NumberCodes', [
      {
        digitCode: 1,
      },
      {
        digitCode: 2,
      },
      {
        digitCode: 3,
      },
      {
        digitCode: 4,
      },
      {
        digitCode: 5,
      },
      {
        digitCode: 6,
      },
      {
        digitCode: 7,
      },
      {
        digitCode: 8,
      },
      {
        digitCode: 9,
      },
      {
        digitCode: 10,
      },
      {
        digitCode: 11,
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('NumberCodes', null, {});
  }
};
