'use strict';
module.exports = function(sequelize, DataTypes) {
  var DanceSessionInstance = sequelize.define('DanceSessionInstance', {
    day: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return DanceSessionInstance;
};