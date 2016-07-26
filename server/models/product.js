console.log('products model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your product schema and add it to the mongoose.models
var ProductSchema = new mongoose.Schema({
  name: {type: String, required: [true,'product needs a name']},
  qty: {type: Number, required: [true, 'Quantity must be greater than 0']},
  img_url: {type: String},
  description: {type: String},
  _orders: [{type: Schema.Types.ObjectId, ref: "Order"}]}, {timestamp: true})
var Product = mongoose.model('Product', ProductSchema)