'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock_Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock_Menu.init({
    menu_id: DataTypes.INTEGER,
    menu_name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    type: DataTypes.STRING,
    reStockDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Stock_Menu',
    tableName: 'Stock_Menu'
  });

  Stock_Menu.associate = function(models){
    //Masterabsen.belongsTo(models.Masterstaff,{foreignKey: 'userId'})
    Stock_Menu.belongsTo(models.Menu,{foreignKey: 'menu_id'})

  }


  return Stock_Menu;
};