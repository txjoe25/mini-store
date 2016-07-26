var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/dashboard.html',
      controller: 'dashboardsController'
    })
    .when('/customers', {
      templateUrl: '/partials/customers.html',
      controller: 'customersController'
    })
    .when('/orders', {
      templateUrl: '/partials/orders.html',
      controller: 'ordersController'
    })
    .when('/products', {
      templateUrl: '/partials/products.html',
      controller: 'productsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});