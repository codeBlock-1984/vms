'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PlateNumbers', [
      {
        id: '1',
        LgaId: 1,
        NumberCodeId: 1,
        generator: 1
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlateNumbers', null, {});
  }
};
