module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Product', {
        productname: {
            type: DataTypes.STRING(255)
        },
        productimage: {
            type: DataTypes.STRING(255)
        },
        Descriptions: {
            type: DataTypes.STRING(255),
        },
        price: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },
    }, {
        TableName: 'Products',
        timestamps: false
    })
    model.associate = models => {
        model.hasMany(models.Cart, {  foreignKey: 'product_id'  });
        model.belongsTo(models.Category, {  foreignKey: 'category_id'  });
    };


    return model;
}
