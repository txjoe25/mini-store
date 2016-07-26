var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');

function sendResults(res) {
  return (err, result) => { res.json(err? {error: err}: result); }
}

function OrdersController(){
  this.index    = (req,res) => { 
    Order.find({})
      .populate('_customer')
      .populate('_product')
      .exec(sendResults(res))
  };
  this.show     = (req,res) => {
    Order.findOne({_id: req.params.id}, sendResults(res)) 
  };
  this.create   = (req,res) => {
    Customer.findOne({_id:req.body.customer_id},(errC,customer)=>{
      if(errC){res.json(errC); return;}
      Product.findOne({_id:req.body.product_id},(errP,product)=>{
        if(errP){res.json(errP); return;}
        var order = new Order({
          qty: req.body.qty
        });
        order._customer = customer;
        order._product = product;
        order.save(err=>{
          if(err){ res.json(err); return;}
          if(order.qty > product.qty){
            res.json({error: product.name + " amount not in stock"});
            return;
          }
          product.qty -= order.qty;
          product._orders.push(order);
          console.log(order,'***********')
          product.save(err =>{
            if(err){ res.json(err); return;}
            customer._orders.push(order);
            customer.save(err =>{
            if(err){ res.json(err); return;};
            res.json(order); return;
          });
        });
      });
    });
  });
};
  this.delete   = (req,res) => { 
    Order.findOne({_id:req.params.id}, function(err, order){
      
      Product.update({_id: order._product},{$inc:{qty:order.qty}},{},function(err,product){ 
        Order.remove({_id: req.params.id}, function(err){ 
          res.json( err? {error: err} : {}); 
        })
      })
    })
  };
}
module.exports = new OrdersController(); // what does this export?