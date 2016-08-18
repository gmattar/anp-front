angular.module('anp.city', []).controller('cityCtrl', function ($scope, $stateParams, $http) {
  $scope.city = {};
  $scope.cityText = 'Select a city to get information';

  $http.get('http://localhost:3000/cities/' + encodeURIComponent($stateParams.cityId))
    .success(function (data) {
      $scope.city = data;
    })
    .error(function () {
      $scope.city = {};
    });
});
