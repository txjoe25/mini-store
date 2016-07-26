console.log('customers model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your customer schema and add it to the mongoose.models
var CustomerSchema = new mongoose.Schema(
{
  name: {type: String, required: [true, 'Name is required']}, 
  _orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
},
  {timestamps: true})
var Customer = mongoose.model('Customer', CustomerSchema)