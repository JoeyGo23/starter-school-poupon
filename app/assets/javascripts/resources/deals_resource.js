poupon.factory('Deals', ['$resource', function ($resource) {
  return $resource('/api/deals/:id', {id: '@id'})
}]);