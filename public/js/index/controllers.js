var gc = angular.module('grooveCentral',[]);
gc.controller('HostCtrl', function($scope) {
  $scope.classes = [
    {
      style: 'Hip hop',
      time: '6pm',
      day: 'Wednesday'
    },
    {
      style: 'Salsa',
      time: '5pm',
      day: 'Thursday'
    },
    {
      style: 'K-pop',
      time: '7pm',
      day: 'Friday'
    },
    {
      style: 'Swing',
      time: '6pm',
      day: 'Monday'
    }
  ]
});
