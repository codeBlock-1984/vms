'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lga = sequelize.define('Lga', {
    code: DataTypes.STRING
  }, {});
  Lga.associate = function(models) {
    Lga.belongsToMany(models.NumberCode, {
      through: 'PlateNumber'
    });
  };
  return Lga;
};