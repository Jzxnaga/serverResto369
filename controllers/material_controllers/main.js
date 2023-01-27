const db = require ("../../models");
const { Material } = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class material_controller{
  static async findAll(req,res,next){
    Material.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = material_controller;