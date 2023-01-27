const db = require ("../../models");
const { Menu , Stock_Menu } = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class menu_controller{
  static async findAll(req,res,next){
    Menu.findAll({include: [{ model: Stock_Menu  }]})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = menu_controller;