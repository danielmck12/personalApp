const express = require('express');
const router = express.Router();

//Import item model
const Item = require('../models/itemModel');

// Get all list items
router.get('/', async (req, res) => {
  const items = await Item.find({})

  res.status(200).json(items);
});

//Get a specific item
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Item.findById(id, (err, result) => {
    if (err) return res.send(err);

    res.status(200).json({"itemFound" : result});
  })
})

//Add a new item
router.post('/', async (req, res) => {
  try{
    const newItem = new Item({
      title: req.body.title,
      subject: req.body.subject,
      comment: req.body.comment,
      completed: false
    })

    const savedItem = await newItem.save();

    res.status(201).json({"itemAdded" : savedItem})

  } catch(e) {
    console.error(e);
    res.json(e);
  } 
});

//Delete an item
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Item.findByIdAndDelete(id, (err, result) => {
    if(err) return res.send(err)

    res.status(200).json({"itemDeleted" : result})
  })
})

//Edit an item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, subject, comment, completed} = req.body;

  const updatedItem = {
    "title": title,
    "subject" : subject,
    "comment" : comment,
    "completed" : completed
  }

  const itemBeforeUpdate = await Item.findById(id)

  Item.findByIdAndUpdate(id, updatedItem, {returnDocument:'after'}, (err, result) => {
    if (err) return res.send(err)
    
    res.status(200).json({"itemBeforeUpdate" : itemBeforeUpdate, "itemAfterUpdate" : result});
  })
})










module.exports = router;
