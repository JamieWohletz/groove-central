'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    score: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.DanceSession, {as: 'HostedDanceSessions'});
        User.hasMany(models.UserRating, {as: 'ReceivedRatings', foreignkey: 'fk_user_ratee', targetKey: 'rateeId'});
        User.hasMany(models.UserRating, {as: 'GivenRatings', foreignkey: 'fk_user_rater', targetKey: 'raterId'});
        User.hasMany(models.UserDanceSessionRating, {as: 'DanceSessionRatings', foreignkey: 'fk_session_rater', targetKey: 'raterId'});
      }
    }
  });
  return User;
};
