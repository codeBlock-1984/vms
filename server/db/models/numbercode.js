'use strict';
module.exports = (sequelize, DataTypes) => {
  const NumberCode = sequelize.define('NumberCode', {
    digitCode: DataTypes.STRING
  }, {});
  NumberCode.associate = function(models) {
    NumberCode.belongsToMany(models.Lga, {
      through: 'PlateNumber'
    });
  };
  return NumberCode;
};