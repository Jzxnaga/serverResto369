const db = require ("../../models");
const { Bill , Bill_Menu , Menu} = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class bill_controller{
  static async findAll(req,res,next){
    Bill.findAll({include: [{ model: Bill_Menu , include : [{ model : Menu }]}]})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async createNewBill(req,res,next){
    let newBody = {
      total : 0 ,
      info : req.body.info,
      settle: 0
    }
    Bill.create(newBody)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })

  }
  
  static async addBillMenu(req,res,next){
    console.log(req.params.id)
    let {
      quantity,
      menu_id
      } = req.body

    let createBody = {
      bill_id : req.params.id,
      menu_id : req.body.menu_id,
      quantity : req.body.quantity
    }
    Bill.findOne({where :{id : req.params.id }})
    .then(data=>{
      if(!data){
        next('bill not found')
      }
      let billData = data
      if(data.dataValues.settle !== 1){
        Bill_Menu.findOne({where :{bill_id : req.params.id , menu_id : req.body.menu_id}})
        .then(data=>{
          if(data){
            let qtyUpdate = data.dataValues.quantity + parseInt(req.body.quantity)
            Bill_Menu.update({ quantity: qtyUpdate }, { where :{bill_id : req.params.id , menu_id : req.body.menu_id}})
            .then(data=>{
              Menu.findOne({where :{id : req.body.menu_id }})
              .then(data=>{
                let salePrice = 0
                if(req.body.statusOn == 'delivery'){
                  salePrice = data.dataValues.priceOnSite
                }else{
                  salePrice = data.dataValues.priceDelivery
                }
                Bill.update({total : parseInt(billData.dataValues.total) + parseInt(parseInt(req.body.quantity) * salePrice)},{where :{id : req.params.id }})
                .then(data=>{
                  res.status(200).json(data)
                })
              })
            })
          }else{
            Bill_Menu.create(createBody)
            .then(data=>{
              Menu.findOne({where :{id : req.body.menu_id }})
              .then(data=>{
                let salePrice = 0
                if(req.body.statusOn == 'delivery'){
                  salePrice = data.dataValues.priceOnSite
                }else{
                  salePrice = data.dataValues.priceDelivery
                }
                Bill.update({total : parseInt(billData.dataValues.total) + parseInt(parseInt(req.body.quantity) * salePrice)},{where :{id : req.params.id }})
                .then(data=>{
                  res.status(200).json(data)
                })
              })
            })
          }
        })

      }else{
        next('already settled')
      }
    })
    .catch(err=>{
      next(err)
    })
  }


  static async editBillMenu(req,res,next){
    console.log(req.params.id)
    let {
      quantity,
      menu_id
      } = req.body
    Bill_Menu.findOne({where :{bill_id : req.params.id , menu_id : req.body.menu_id}})
    .then(data=>{
      if(data){
        Bill_Menu.update({ quantity: req.body.quantity }, { where :{bill_id : req.params.id , menu_id : req.body.menu_id}})
        .then(data=>{
          Menu.findOne({where :{id : req.body.menu_id }})
          .then(data=>{
            let salePrice = 0
            if(req.body.statusOn == 'delivery'){
              salePrice = data.dataValues.priceOnSite
            }else{
              salePrice = data.dataValues.priceDelivery
            }
            Bill.update({total : parseInt(billData.dataValues.total) + parseInt(parseInt(req.body.quantity) * salePrice)},{where :{id : req.params.id }})
            .then(data=>{
              res.status(200).json(data)
            })
          })
        })
      }else{
        next('bill menu not found')
      }
    })
    
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = bill_controller;