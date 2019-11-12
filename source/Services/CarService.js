//const Sequelize = require('sequelize')
//const DbCar = require('../Models/DbCar')
//const db = require('../../config/database');
//const Car = DbCar(db,Sequelize);
const { DbCar } = require('../Models/sequelize')

class CarService {
    async SaveCar(req, res) {
        return DbCar.create({ cor_carro: 'Preto', placa: 'MNC-2204', categoria: 'B', modelo: 'Fiat', fabricante: 'Uno' });
    }

    async GetCars(req, res) {
        return DbCar.findAll();
    }
}
module.exports = new CarService();