console.log('orders model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your order schema and add it to the mongoose.models
var OrderSchema = new mongoose.Schema({
  qty: {type: Number, default: 1}, 
  _customer:{type: Schema.Types.ObjectId, ref: 'Customer'},
  _product: {type: Schema.Types.ObjectId, ref: 'Product'}}, 
  {timestamps: true})
var Order = mongoose.model('Order', OrderSchema)