var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function sendResults(res) {
  return (err, result) => { res.json(err? {error: err}: result); }
}

function ProductsController(){
  this.index    = (req,res) => { Product.find({}, sendResults(res)) };
  this.show     = (req,res) => {
    Product.findOne({_id: req.params.id}, sendResults(res)) 
  };
  this.create   = (req,res) => {
    console.log('in the controller')
    var productObj = {}
    var fields = ['name','qty','img_url','description']
    for(let i=0; i<fields.length; i++){
      if(fields[i] in req.body){
        productObj[fields[i]] = req.body[fields[i]]
      }
    }
    console.log(productObj)
    var product = new Product(productObj);
    product.save(sendResults(res))
  };
  this.update   = (req,res) => {
    var productObj = {}
    var fields = ['name','qty','img_url','description']
    for(let i=0; i<fields.length; i++){
      if(fields[i] in req.body){
        productObj[fields[i]] = req.body[fields[i]]
      }
    }
    Product.update(
      {_id: req.params.id},
      {$set: productObj },
      sendResults(res)
    )
  };
  this.delete   = (req,res) => { 
    Product.remove({_id: req.params.id}, 
      (err) => { res.json( err? {error: err} : {}); });
  };
}
module.exports = new ProductsController(); // what does this export?