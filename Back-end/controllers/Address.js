const db = require("../models");

const getAddress = async (req, res) => {
  const Address = await db.Address.findAll({
    where: { account_id: req.user.id },
  });
  res.status(200).send(Address);
};

const addAddress = async (req, res) => {
  const newAddress = await db.Address.create({
    address: req.body.address,
    account_id: req.user.id,
  });
  res.status(201).send(newAddress);
};

const deleteAddress = async (req, res) => {
  const targetId = Number(req.params.id);
  const targetAddress = await db.Address.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetAddress) {
    await targetAddress.destroy();
    res.status(204).send();
  } else {
    res.status(404).send({ message: "Address not found" });
  }
};

const updateAddress = async (req, res) => {
  const targetId = Number(req.params.id);
  const newAddress = req.body.address;
  const targetAddress = await db.Address.findOne({
    where: { id: targetId, account_id: req.user.id },
  });
  if (targetAddress) {
    await targetAddress.update({
        address: newAddress
    });
    res.status(200).send({ message: "updating is success" });
  } else {
    res.status(404).send({ message: "Address not found" });
  }
};

module.exports = {
  getAddress,
  addAddress,
  deleteAddress,
  updateAddress,
};
