'use strict';
module.exports = function(sequelize, DataTypes) {
  var DanceSession = sequelize.define('DanceSession', {
    description: DataTypes.TEXT,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    score: DataTypes.DOUBLE,
    joinPrice: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        DanceSession.hasMany(models.DanceSessionInstance, {as: 'instances'});
        DanceSession.hasMany(models.UserDanceSessionRating, {as: 'SessionRatings', foreignkey: 'fk_session_rating', targetKey: 'sessionId'});
      }
    }
  });
  return DanceSession;
};
