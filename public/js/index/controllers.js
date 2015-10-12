var gc = angular.module('grooveCentral',[]);
gc.controller('ScheduleCtrl', ['$rootScope', '$scope', function($scope) {
  $scope.classData = {
    weekStart: '9/6/15',
    weekEnd: '9/12/15',
    days: {
      'Monday': {
        '5pm': [
          {
            style: 'Hip hop',
            duration: '1 hour'
          }
        ],
        '6pm':[
          {
            style: 'Salsa',
            duration: '30 minutes'
          }
        ]
      },
      'Tuesday': {
        '7pm': [
          {
            style: 'K-pop',
            duration: '1 hour'
          }
        ]
      },
      'Wednesday': {
        '6pm': [
          {
            style: 'Swing',
            duration: '2 hours'
          }
        ]
      },
      'Thursday': {

      },
      'Friday': {

      },
      'Saturday': {

      },
      'Sunday': {

      }
    }
  };
}]);
