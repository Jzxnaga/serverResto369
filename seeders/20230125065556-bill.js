'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeder_files/bill.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        total : data[i].total,
        info : data[i].info,
        settle : data[i].settle,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Bill', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bill', null, {});
  }
};