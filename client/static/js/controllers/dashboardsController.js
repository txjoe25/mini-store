app.controller('dashboardsController', 
  ['$scope',
   'customersFactory',
   'ordersFactory',
   'productsFactory',
   '$routeParams', 
  function($scope, customersFactory, ordersFactory, productsFactory, $routeParams) {
    $scope.prettyDate = date => moment(date).format('LL');
    $scope.relativeDate = date => moment(date).format();
    customersFactory.index(customers=>{
      $scope.customers = customers
    })
    ordersFactory.index(orders=>{
      $scope.orders = orders
    })
    productsFactory.index(products=>{
      $scope.products = products
    })
    $scope.limits = {
      'product': 3,
      'order': 3,
      'customer': 3,
    };
    $scope.relativeDate = date => moment(date).fromNow();
    $scope.seeMore = (thing) => {$scope.limits[thing]+= 15;}
    $scope.newRow = i => (i % 3 === 0)
    $scope.endow = i => (i % 3 === 0)
  }
])