'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserRating = sequelize.define('UserRating', {
    raterId: DataTypes.INTEGER,
    rateeId: DataTypes.INTEGER,
    ratingId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        UserRating.belongsTo(models.Rating);
        // associations can be defined here
      }
    }
  });
  return UserRating;
};
