'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill.init({
    total: DataTypes.INTEGER,
    settle: DataTypes.INTEGER,
    info: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bill',
    tableName: 'Bill'
  });

  Bill.associate = function(models){
    Bill.hasMany(models.Bill_Menu,{foreignKey: 'bill_id'})
  }

  return Bill;
};