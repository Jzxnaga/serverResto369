'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material_Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Material_Menu.init({
    material_id: DataTypes.INTEGER,
    menu_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material_Menu',
    tableName: 'Material_Menu'
  });
  return Material_Menu;
};