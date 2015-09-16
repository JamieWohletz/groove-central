'use strict';
module.exports = function(sequelize, DataTypes) {
  var SessionInstance = sequelize.define('SessionInstance', {
    day: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SessionInstance;
};