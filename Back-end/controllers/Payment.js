const express = require('express');
const router = express.Router();

const addPayment = async (req, res) => {
    const newPayment = await db.Payment.create({
        Amount: req.body.Amount,
        Payment: req.body.Payment,
    });
    res.status(201).send(newPayment);
  };

  module.exports = {
    addPayment,
  };
  