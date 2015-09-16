'use strict';
module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    description: DataTypes.TEXT,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    score: DataTypes.DOUBLE,
    joinPrice: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        Session.hasMany(models.SessionInstance, {as: 'instances'});
        Session.hasMany(models.UserSessionRating, {as: 'SessionRatings', foreignkey: 'fk_session_rating', targetKey: 'sessionId'});
        // associations can be defined here
      }
    }
  });
  return Session;
};
