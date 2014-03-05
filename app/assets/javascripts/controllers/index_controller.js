poupon.controller('IndexCtrl', ['$scope', 'Deals', 'Socket', function ($scope, Deals, Socket) {
  $scope.deals = Deals.query();

  Socket.bind('new_deal', function (data) {
    $scope.deals.unshift(data);
    $scope.$apply();
  });
}]);