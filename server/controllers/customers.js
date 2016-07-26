var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

function sendResults(res) {
  return (err, result) => { res.json(err? {error: err}: result); }
}

function CustomersController(){
  this.index    = (req,res) => { Customer.find({}, sendResults(res)) };
  this.show     = (req,res) => {
    Customer.findOne({_id: req.params.id}, sendResults(res)) 
  };
  this.create   = (req,res) => {
    var customerObj = {name: req.body.name}
    Customer.find(customerObj, (err, result)=>{
      if(result.length == 0){
        var customer = new Customer(customerObj);
        customer.save(sendResults(res));
      } else{
        res.json(err? {error: err}: {error: 'User already exists'});
      }
    })
  };
  this.update   = (req,res) => {
    Customer.update(
      {_id: req.params.id},
      {$set: {
        name: req.body.name,
      }},
      sendResults(res)
    )
  };
  this.delete   = (req,res) => { 
    Customer.remove({_id: req.params.id}, 
      (err) => { res.json( err? {error: err} : {}); }
    ) 
  };
}
module.exports = new CustomersController(); // what does this export?