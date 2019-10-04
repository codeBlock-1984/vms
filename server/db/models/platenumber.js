'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlateNumber = sequelize.define('PlateNumber', {
    generator:  DataTypes.INTEGER,
    aplhaCode: DataTypes.STRING
  }, {});
  PlateNumber.associate = function(models) {
    // associations can be defined here
    PlateNumber.belongsTo(
      models.User,
      {
        foreignKey: 'id'
      }
    );
  };
  return PlateNumber;
};