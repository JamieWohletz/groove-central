'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudioPicture = sequelize.define('StudioPicture', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudioPicture;
};
