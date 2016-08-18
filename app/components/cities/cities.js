angular.module('anp.cities', []).controller('citiesCtrl', function ($scope, $http) {
  $scope.cities = [];

  $http.get('http://localhost:3000/cities')
    .success(function (data) {
      data.forEach(function(city) {
        city.safe_id = encodeURIComponent(city.id);
      });
      $scope.cities = data;
    })
    .error(function () {
      $scope.cities = [];
    });
});
