'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlateNumbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LgaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lgas',
          key: 'id'
        }
      },
      NumberCodeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NumberCodes',
          key: 'id'
        }
      },
      generator: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      aplhaCode: {
        type: Sequelize.STRING,
        required: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlateNumbers');
  }
};