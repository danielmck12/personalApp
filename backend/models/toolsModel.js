const mongoose = require('mongoose');

const { Schema } = mongoose;

//individual tool child schema
const toolSchema = new Schema({
   name: String,
   description: String
})

//tools parent schema
const toolsSchema = new Schema({
   toolsList: [toolSchema]
})

//tools model
const Tools = mongoose.model('Tools', toolsSchema)
const Tool = mongoose.model('Tool', toolSchema)
module.exports = {Tools, Tool}