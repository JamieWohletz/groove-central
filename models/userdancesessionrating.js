'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserDanceSessionRating = sequelize.define('UserDanceSessionRating', {
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return UserDanceSessionRating;
};
