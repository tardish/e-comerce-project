const db = require("../models");

const getCart = async (req, res) => {
  const Cart = await db.Cart.findAll({
    where: { account_id: req.user.id },
  });
  res.status(200).send(Cart);
};

const addCart = async (req, res) => {
  const newCart = await db.Cart.create({
    quantity: req.body.quantity,
    totalprice: req.body.totalprice,
    account_id: req.user.id,
    product_id: req.body.product_id,
  });
  res.status(201).send(newCart);
};

const deleteCart = async (req, res) => {
  const targetId = Number(req.params.id);
  const targetCart = await db.Cart.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetCart) {
    await targetCart.destroy();
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
};
const getCartProducts = async (req, res) => {
  const allProducts = await db.Cart.findAll({ 
    include: [{model:db.Product}]})
  res.status(200).send(allProducts);
};
 

const updateCart = async (req, res) => {
  const targetId = Number(req.params.id);
  const targetCart = await db.Cart.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetCart) {
    await targetCart.update({
      quantity: req.body.quantity,
      totalprice: req.body.totalprice,
    });
    res.status(200).send({ message: "updating is success" });
  } else {
    res.status(404).send({ message: "Address not found" });
  }
};

module.exports = {
  getCart,
  addCart,
  deleteCart,
  updateCart,
  getCartProducts,
};
