const mongoose = require('mongoose');

const { Schema } = mongoose;

//List item schema
const itemSchema = new Schema({
   title: String,
   subject: String,
   comment: String,
   progress: {type: Number, min:1, max:3}
});

//List item model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
