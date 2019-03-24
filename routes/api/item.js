const express = require('express');
const router = express.Router()

//Item model
const Item = require('../../models/item.model')

// @route GET api/items
// @desc    Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
        .catch(e => console.log(e))
})


// @route POST api/items
// @desc    Create a Post
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    
    newItem.save()
        .then(item => res.status(200).json(item))
        .catch(e => console.log(e))
})

// @route DELETE api/items/:id
// @desc    Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then( item =>
        item.remove().then(() => res.json({success: true}))
    ).catch(e => console.log(e))
})

module.exports = router;