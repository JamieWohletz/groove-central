'use strict';
module.exports = function(sequelize, DataTypes) {
  var Studio = sequelize.define('Studio', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Studio.hasMany(models.Session, {as: 'Sessions'}); 
        // associations can be defined here
      }
    }
  });
  return Studio;
};
