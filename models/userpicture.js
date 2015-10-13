'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserPicture = sequelize.define('UserPicture', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserPicture;
};
