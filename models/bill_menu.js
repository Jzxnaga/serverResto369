'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill_Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill_Menu.init({
    bill_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bill_Menu',
    tableName: 'Bill_Menu'
  });

  Bill_Menu.associate = function(models){
    Bill_Menu.belongsTo(models.Bill,{foreignKey: 'bill_id'})
    Bill_Menu.belongsTo(models.Menu,{foreignKey: 'menu_id'})
  }


  return Bill_Menu;
};