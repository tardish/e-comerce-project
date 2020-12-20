module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Address', {
     address :{
        type:DataTypes.STRING(255)
      },
     
    },{
      TableName :'Address',
      timestamps: false
    })

    model.associate = models => {
      model.belongsTo(models.Account, { foreignKey: 'account_id'  });
    };
  
    return model;
  }
  