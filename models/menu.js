'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    stock_id: DataTypes.INTEGER,
    priceOnSite: DataTypes.INTEGER,
    priceDelivery: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
    tableName: 'Menu'
  });

  Menu.associate = function(models){
    Menu.hasMany(models.Stock_Menu, {foreignKey : 'menu_id'});
    Menu.hasMany(models.Bill_Menu,{foreignKey: 'menu_id'})
  }



  return Menu;
};