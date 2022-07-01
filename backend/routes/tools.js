const express = require('express');
const router = express.Router();

//Import tools model
const { Tool }= require('../models/toolsModel');

//get tools
router.get('/', async (req, res) => {
   const tools = await Tool.find({});

   res.json(tools);
})

//Add a new tool
router.post('/', async (req, res) => {
   try {
      const newTool = new Tool({
         name: req.body.name,
         description: req.body.description
      })

      const savedTool = await newTool.save()

      console.log('SAVED TOOL : ' + savedTool)
      res.status(201).json(newTool);
      
   } catch(e) {
      console.log(e)
      res.status(500).send(e)
   }
   
   
})







module.exports = router;