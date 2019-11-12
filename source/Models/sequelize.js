const Sequelize = require('sequelize')
const DbCarModel = require('./DbCar')
const databaseConfig = require ('../../config/database');

const sequelize = new Sequelize(databaseConfig);

const Car = DbCarModel(sequelize, Sequelize)

module.exports = {
    Car
}