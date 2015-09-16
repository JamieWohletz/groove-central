'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Location.hasMany(models.User, {as: 'UsersHere'});
        Location.hasMany(models.Studio, {as: 'StudiosHere'}); 
        // associations can be defined here
      }
    }
  });
  return Location;
};
