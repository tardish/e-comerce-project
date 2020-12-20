module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Cart', {
    quantity: {
      type: DataTypes.INTEGER
    },
    totalprice: {
      type: DataTypes.INTEGER
    },
  }, {
    TableName: 'Cart',
    timestamps: false
  })
  model.associate = models => {
    model.belongsTo(models.Account, { foreignKey: 'account_id'  });
    model.belongsTo(models.Product, {  foreignKey: 'product_id'  });
  };

  return model;
}
 