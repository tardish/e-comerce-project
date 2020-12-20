const express = require('express');
const router = express.Router();

const getCategory = async (req, res) => {
    const Category = await db.Category.findAll();
    res.status(200).send(Category);
  };

  module.exports = {
    getCategory,
  };
  