'use strict';
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        City.hasMany(models.Address);
        City.hasMany(models.User); 
      }
    }
  });
  return City;
};
