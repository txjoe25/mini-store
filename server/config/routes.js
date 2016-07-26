var mongoose = require('mongoose');
var orders = require('../controllers/orders.js')
var products = require('../controllers/products.js')
var customers = require('../controllers/customers.js')

console.log('routes');

module.exports = function(app){
app.get('/orders', orders.index);         // show all
app.get('/orders/:id', orders.show);      // show one
app.post('/orders', orders.create);       // create order 
// app.put('/orders/:id', orders.update);    // update order
app.delete('/orders/:id', orders.delete);
app.get('/customers', customers.index);         // show all
app.get('/customers/:id', customers.show);      // show one
app.post('/customers', customers.create);       // create customer 
app.put('/customers/:id', customers.update);    // update customer
app.delete('/customers/:id', customers.delete);
app.get('/products', products.index);         // show all
app.get('/products/:id', products.show);      // show one
app.post('/products', products.create);       // create product 
app.put('/products/:id', products.update);    // update product
app.delete('/products/:id', products.delete);
}
