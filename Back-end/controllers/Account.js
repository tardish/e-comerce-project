const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const e = require("cors");

const getAllAccounts = async (req, res) => {
  const allAccounts = await db.Account.findAll( );
  res.status(200).send(allAccounts);
};

const registerAccount = async (req, res) => {
  const { firstname, lastname, email, password, phone,avatar } = req.body;
  const targetAccount = await db.Account.findOne({ where: { email: email }});
  if (targetAccount) {
    res.status(400).send({ message: "Email already taken." });
  } else {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    await db.Account.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      phone: phone,
      avatar: avatar,
    });

    res.status(201).send({ message: "Account Created" });
  }
};

const loginAccount = async (req, res) => {
    const { email,password } = req.body;
    const targetAccount = await db.Account.findOne({ where: { email:email }});
    if (!targetAccount){
        res.status(400).send({ message:'Email or Password is wrong'});
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password,targetAccount.password);

        if (isCorrectPassword){
            const payload = {
                name:targetAccount.firstname,
                id:targetAccount.id,
            };
            const token = jwt.sign(payload,'c0dEc4MP', { expiresIn : 3600});

            res.status(200).send({
                token: token,
                message: 'Login successful.'
            });
        } else {
            res.status(400).send({ message: 'Email or Password is wrong'});
        }
    }
};

module.exports = {
  getAllAccounts,
  registerAccount,
  loginAccount,
};
