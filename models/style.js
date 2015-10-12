'use strict';
module.exports = function(sequelize, DataTypes) {
  var Style = sequelize.define('Style', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Style.hasMany(models.DanceSession, {as: 'DanceSessions'});
      }
    }
  });
  return Style;
};
