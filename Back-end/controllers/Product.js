const db = require("../models");

const getAllProducts = async (req, res) => {
  const allProducts = await db.Product.findAll();
  res.status(200).send(allProducts);
};

const getCartProducts = async (req, res) => {
  const allProducts = await db.Product.findAll({ 
    include: [{model:db.Cart}]})
  res.status(200).send(allProducts);
};
 
const getOneProducts = async (req, res) => {
  const targetId = Number(req.params.id);
  const oneProducts = await db.Product.findOne({
    where: { id: targetId },
  });
  res.status(200).send(oneProducts);
};

const addProduct = async (req, res) => {
  const newProduct = await db.Product.create({
    productname: req.body.productname,
    productimage: req.body.productname,
    Descriptions: req.body.Descriptions,
    price: req.body.price,
    stock: req.body.stock,
  });
  res.status(201).send(newProduct);
};

const deleteProduct = async (req, res) => {
  const targetId = Number(req.params.id);
  const targetProduct = await db.Product.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetProduct) {
    await targetProduct.destroy();
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
};

const updateProduct = async (req, res) => {
  const targetId = Number(req.params.id);
  const targetProduct = await db.Product.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetProduct) {
    await targetProduct.update({
      productname: req.body.productname,
      productimage: req.body.productname,
      Descriptions: req.body.Descriptions,
      price: req.body.price,
      stock: req.body.stock,
    });
    res.status(200).send({ message: "updating is success" });
  } else {
    res.status(404).send({ message: "Address not found" });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getOneProducts,
  getCartProducts,
};
