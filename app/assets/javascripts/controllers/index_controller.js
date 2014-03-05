poupon.controller('IndexCtrl', ['$scope', 'Deals', function ($scope, Deals) {
  $scope.deals = Deals.query();
}]);