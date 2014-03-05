poupon.controller('DetailCtrl', ['$scope', 'Deals', '$routeParams', function ($scope, Deals, $routeParams) {
  $scope.deal = Deals.get({id: $routeParams.deal_id});
}]);