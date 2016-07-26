
console.log('Orders Factory');

app.factory('ordersFactory', ['$http', function($http) {
  var orders = [];
  var order = [];
  var factory = {
    create: (neworder,callback) => {
      $http.post('/orders', neworder).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      });
    },
    update: (id, updated_order, callback) => {
      $http.put('/orders/'+id, updated_order).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      })
    },
    index: (callback) => {
      $http.get('/orders').then(function(returned_data){
        orders = returned_data.data;
        for(let i=0; i<orders.length;i++){
          orders[i].caPretty=moment(orders[i].createdAt).format('LL')
        }
        callback(orders);
      });
    },
    delete: (id, callback) => { 
      $http.delete('/orders/'+id)
        .then(function(returned_data){
          orders = returned_data.data;
          callback(orders);
        }); 
    },
    show: (id, callback) => {
      $http.get('/orders/'+id).then(function(returned_data){
        callback(returned_data.data);
      }); },
    getOrders: callback => { callback(orders) },
    getOrder:  (id, callback) => { 
      callback(orders[id]) 
    }
  };
  return factory;
}]);