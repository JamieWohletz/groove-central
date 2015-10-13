'use strict';
module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define('Picture', {
    assetUrl: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Picture.hasOne(models.StudioPicture);
        Picture.hasOne(models.UserPicture); 
      }
    }
  });
  return Picture;
};
