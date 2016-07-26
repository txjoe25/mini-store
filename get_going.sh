#!/bin/bash

RORDER="s/Friend/Order/g;s/friend/order/g"
RCUSTOMER="s/Friend/Customer/g;s/friend/customer/g"
RPRODUCT="s/Friend/Product/g;s/friend/product/g"

sed $RORDER client/static/js/factories/friendsFactory.js > client/static/js/factories/ordersFactory.js
sed $RCUSTOMER client/static/js/factories/friendsFactory.js > client/static/js/factories/customersFactory.js
sed $RPRODUCT client/static/js/factories/friendsFactory.js > client/static/js/factories/productsFactory.js

sed $RORDER server/config/route_snippet.js > server/config/order_snippet.js
sed $RCUSTOMER server/config/route_snippet.js > server/config/customer_snippet.js
sed $RPRODUCT server/config/route_snippet.js > server/config/product_snippet.js

sed $RORDER server/controllers/friends.js > server/controllers/orders.js
sed $RCUSTOMER server/controllers/friends.js > server/controllers/customers.js
sed $RPRODUCT server/controllers/friends.js > server/controllers/products.js

sed $RORDER server/models/friend.js > server/models/order.js
sed $RCUSTOMER server/models/friend.js > server/models/customer.js
sed $RPRODUCT server/models/friend.js > server/models/product.js

cd client/views/partials
touch dashboard.html orders.html customers.html products.html