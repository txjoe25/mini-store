
console.log('Customers Factory');

app.factory('customersFactory', ['$http', function($http) {
  var customers = [];
  var customer = [];
  var factory = {
    create: (newcustomer,callback) => {
      $http.post('/customers', newcustomer).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      });
    },
    update: (id, updated_customer, callback) => {
      $http.put('/customers/'+id, updated_customer).then( returned_data => {
        if (typeof(callback) == 'function') callback(returned_data.data);
      })
    },
    index: (callback) => {
      $http.get('/customers').then(function(returned_data){
        customers = returned_data.data;
        for(let i=0; i<customers.length;i++){
          customers[i].caPretty=moment(customers[i].createdAt).format('LL')
        }
        callback(customers);
      });
    },
    delete: (id, callback) => { 
      $http.delete('/customers/'+id)
        .then(function(returned_data){
          customers = returned_data.data;
          callback(customers);
        }); 
    },
    show: (id, callback) => {
      $http.get('/customers/'+id).then(function(returned_data){
        callback(returned_data.data);
      }); },
    getCustomers: callback => { callback(customers) },
    getCustomer:  (id, callback) => { 
      callback(customers[id]) 
    }
  };
  return factory;
}]);