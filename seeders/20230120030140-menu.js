'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeder_files/menu.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        name : data[i].name,
        type : data[i].type,
        stock_id : data[i].stock_id,
        priceOnSite : data[i].priceOnSite,
        priceDelivery : data[i].priceDelivery,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Menu', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menu', null, {});
  }
};