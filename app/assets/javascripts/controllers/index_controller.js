poupon.controller('IndexCtrl', ['$scope', 'Deals', 'Socket', function ($scope, Deals, Socket) {
  $scope.deals = Deals.query();

  Socket.bind('new_deal', function (data) {
    // For animations: add an extra property, so that we can set a special class
    data.pushed = true
    $scope.deals.unshift(data);
    $scope.$apply();
  });
}]);