'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeder_files/bill_menu.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        bill_id : data[i].bill_id,
        menu_id : data[i].menu_id,
        quantity : data[i].quantity,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Bill_Menu', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bill_Menu', null, {});
  }
};