'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeder_files/stock_menu.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        menu_id : data[i].menu_id,
        menu_name : data[i].menu_name,
        qty : data[i].qty,
        type : data[i].type,
        reStockDate : data[i].reStockDate,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Stock_Menu', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stock_Menu', null, {});
  }
};