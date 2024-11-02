const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Route lấy tất cả các item
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Route thêm item mới
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
});

module.exports = router;
