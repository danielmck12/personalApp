const mongoose = require('mongoose');

const { Schema } = mongoose;

//book schema
const bookSchema = new Schema({
   bookName: String,
   author: String,
   publisher: String,
   published: Number,
   pages:Number,
   beenRead: Boolean,
   summary: String
})

//video schema
const videoSchema = new Schema({
   videoName: String,
   channelName: String,
   youtubeLink: String,
   description: String

})

//individual subject schema
const subjectSchema = new Schema({
   subjectName: {type:String, required: true},
   overview: String,
   books: [bookSchema],
   videos: [videoSchema],
   personalWork: [String]
})

//subject model
const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject 