'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Rating.hasMany(models.UserRating, {as: 'UserRatings', foreignkey: 'fk_user_rating', targetKey: 'ratingId'});
        Rating.hasMany(models.UserDanceSessionRating, {as: 'UserDanceSessionRatings', foreignkey: 'fk_session_rating', targetKey: 'ratingId'});
      }
    }
  });
  return Rating;
};
