'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserRating = sequelize.define('UserRating', {
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return UserRating;
};
