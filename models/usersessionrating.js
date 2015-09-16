'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSessionRating = sequelize.define('UserSessionRating', {
    raterId: DataTypes.INTEGER,
    sessionId: DataTypes.INTEGER,
    ratingId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UserSessionRating.belongsTo(models.Rating, {as: 'Rating'}); 
      }
    }
  });
  return UserSessionRating;
};
