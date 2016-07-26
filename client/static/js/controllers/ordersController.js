app.controller('ordersController', 
  ['$scope',
   'customersFactory',
   'ordersFactory',
   'productsFactory',
   '$routeParams', 
  function($scope, customersFactory, ordersFactory, productsFactory, $routeParams) {
    function loadAll(){
      productsFactory.index(products=>{
        $scope.products = products
      })
      customersFactory.index(customers=>{
        $scope.customers = customers
      })
      ordersFactory.index(orders=>{
        $scope.orders = orders
      })
    }
    loadAll()
    $scope.deleteOrder = id => ordersFactory.delete(id, loadAll);
    
    $scope.submitNew = () => {
      if($scope.newOrder.qty != undefined && $scope.newOrder.qty >= 0){
        ordersFactory.create($scope.newOrder, function(stuff){
        loadAll()
        })
      };
        // $scope.createOrder.$setPristine();
      }
    }

    
  ]
);