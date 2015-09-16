'use strict';
module.exports = function(sequelize, DataTypes) {
  var Style = sequelize.define('Style', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Style.hasMany(models.Session, {as: 'Sessions'})
        // associations can be defined here
      }
    }
  });
  return Style;
};
