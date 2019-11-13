const Sequelize = require('sequelize')
const UserModel = require('./user')
const CarModel = require('./car')
const CarReserveModel = require('./car-reserve')
const RentalCompanyModel = require('./rental-company')

const sequelize = new Sequelize('essgdb', 'essgdb', 'Hl88m0gOX-?n', {
  host: 'den1.mysql3.gear.host',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize);
const Car = CarModel(sequelize, Sequelize);
const CarReserve = CarReserveModel(sequelize, Sequelize);
const RentalCompany = RentalCompanyModel(sequelize, Sequelize);

module.exports = {
  User,
  Car,
  CarReserve,
  RentalCompany
}