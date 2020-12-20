module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Account', {
     firstname :{
        type:DataTypes.STRING(255)
      },
      lastname :{
        type:DataTypes.STRING(255)
      },
      email :{
        type:DataTypes.STRING(255),
        unique: true,
      },
      password :{
        type:DataTypes.STRING(255)
      },
      phone :{
        type:DataTypes.INTEGER
      },
      avatar :{
        type:DataTypes.STRING(255)
      },
    },{
      TableName :'Accounts',
      timestamps: false
    })
  
    model.associate = models => {
      model.hasOne(models.Cart,{ foreignKey : 'account_id'  });
      model.hasOne(models.Address,{ foreignKey :'account_id' });
    };
  
    return model;
  }
  