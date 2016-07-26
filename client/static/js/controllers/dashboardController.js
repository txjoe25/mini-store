app.controller('customersController', 
  ['$scope',
   'customersFactory',
   'ordersFactory',
   'productsFactory',
   '$routeParams', 
  function($scope, customersFactory, ordersFactory, productsFactory, $routeParams) {
    function loadFriends(){
      friendsFactory.index(friends => { 
        $scope.friends = friends; 
      });
    }
    loadFriends();
    $scope.delete = id => { friendsFactory.delete(id, loadFriends); }
  }
])