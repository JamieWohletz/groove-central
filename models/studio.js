'use strict';
module.exports = function(sequelize, DataTypes) {
  var Studio = sequelize.define('Studio', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Studio.hasMany(models.DanceSession, {as: 'DanceSessions'});
        Studio.hasMany(models.StudioPicture, {as: 'StudioPictures', foreignkey: 'fk_studio_picture', targetKey: 'studioId'});
      }
    }
  });
  return Studio;
};
