
console.log('Products Factory');

app.factory('productsFactory', ['$http', function($http) {
  var products = [];
  var product = [];
  var factory = {
    create: (newproduct,callback) => {
      console.log(newproduct,'newproduct')
      $http.post('/products', newproduct).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      });
    },
    update: (id, updated_product, callback) => {
      $http.put('/products/'+id, updated_product).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      })
    },
    index: (callback) => {
      $http.get('/products').then(function(returned_data){
        products = returned_data.data;
        callback(products);
      });
    },
    delete: (id, callback) => { 
      $http.delete('/products/'+id)
        .then(function(returned_data){
          products = returned_data.data;
          callback(products);
        }); 
    },
    show: (id, callback) => {
      $http.get('/products/'+id).then(function(returned_data){
        callback(returned_data.data);
      }); },
    getProducts: callback => { callback(products) },
    getProduct:  (id, callback) => { 
      callback(products[id]) 
    }
  };
  return factory;
}]);