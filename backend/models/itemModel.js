const mongoose = require('mongoose');

const { Schema } = mongoose;

//List item schema
const itemSchema = new Schema({
   title: String,
   subject: String,
   comment: String,
   completed: Boolean
});

//List item model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
