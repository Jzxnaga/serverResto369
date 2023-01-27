const db = require ("../../models");
const { Material , Stock_Menu } = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class stock_controller{
  static async findAll(req,res,next){
    Stock_Menu.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = stock_controller;