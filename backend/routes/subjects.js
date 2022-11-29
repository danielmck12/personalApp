const express = require('express');
const path = require('path');
const router = express.Router();

const Subject = require('../models/subjectModel.js');

//Get all subjects
router.get('/', async (req, res) => {
   try{
      Subject.find({}, (err, docs) => {
         if (err) return res.send(err)

         res.json(docs).status(200);
      })
   } catch(e) {
      console.log(e);
      res.json(e)
   }
   
})
//Find subject by name and return it
router.get('/:subjectName', async (req, res) => {
   try {
      let subjectNameReq  = req.params.subjectName
      //Find the subject
      Subject.findOne({ subjectName: subjectNameReq }, (err, doc) => {
         if(err) return res.send(err);

         console.log("SUBJECT FOUND : ", doc);
         res.json(doc).status(200);
      })

   } catch(e) {
      console.log(e);
      res.json(e);
   }
})

//New subject
router.post('/', async (req, res) => {
   try {
      let { subjectName, overview, books, videos, personalWork } = req.body

      const newSubject = new Subject({
         subjectName: subjectName,
         overview: overview,
         books: books,
         videos: videos,
         personalWork: personalWork
      })

      const savedSubject = await newSubject.save();

      res.status(201).json({ savedSubject })

   } catch(e) {
      console.log(e);
      res.json(e);
   }
})

//New book
router.post('/:id/books', async (req, res) => {
   try {

      const { id } = req.params;
      const { bookName, author, publisher, published, pages } = req.body;
      
      const newBook = {
         "bookName" : bookName,
         "author" : author,
         "publisher" : publisher,
         "published" : published,
         "pages" : pages
      }

      Subject.findById(id, async (err, subject) => {
         if(err) return res.send(e)

         subject.books.push(newBook);

         const savedSubject = await subject.save()

         res.json({"subject identified" : subject, "new book" : newBook}).status(200);
         
      })

   }catch(e) {
      console.log(e);
      res.json(e);
   }
})

//New video
router.post('/:id/videos', async (req, res) => {
   try {

      const { id } = req.params;
      const { videoName, channelName, youtubeLink, description } = req.body;

      const newVideo = {
         "videoName": videoName,
         "channelName": channelName,
         "youtubeLink": youtubeLink,
         "description": description
      }

      Subject.findById(id, async (err, subject) => {
         if (err) return res.send(e)

         subject.videos.push(newVideo);

         const savedSubject = await subject.save()

         res.json({ "Subject Identified": subject.subjectName, "New Video": newVideo }).status(200);

      })

   } catch (e) {
      console.log(e);
      res.json(e);
   }
})







module.exports = router;