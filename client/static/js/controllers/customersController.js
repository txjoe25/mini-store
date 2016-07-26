app.controller('customersController', 
  ['$scope',
   'customersFactory',
   '$routeParams',
  function($scope, customersFactory, $routeParams) {
    function loadCustomers(){
    customersFactory.index(customers=>{
      $scope.customers = customers
    })
  }
  loadCustomers();
    $scope.deleteCustomer = id => customersFactory.delete(id, loadCustomers);
    $scope.submitNew = () => {customersFactory.create($scope.newCustomer);
  loadCustomers();
}
  }])
  