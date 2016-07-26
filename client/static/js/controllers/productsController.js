app.controller('productsController', ['$scope','productsFactory','$routeParams', '$location', function($scope, productsFactory, $routeParams, $location) {
    function loadProducts(){
    productsFactory.index(products=>{
      console.log(products)
      $scope.products = products
    })
  }
  loadProducts();
  $scope.deleteProduct = id => productsFactory.delete(id, loadProducts);
    $scope.submitNew = () => {
    if($scope.newProduct.qty && $scope.newProduct.qty >= 0){
      productsFactory.create($scope.newProduct);
      loadProducts();
    }
}
}])
    