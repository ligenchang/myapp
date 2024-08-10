// backend/src/controllers/itemController.js
const { Item } = require('../models/Item');

const getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const item = await Item.create({ name, price });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getItems, createItem };
