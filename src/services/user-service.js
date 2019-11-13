const { Car } = require('../models/sequelize')
const { CarReserve } = require('../models/sequelize')
const Op = require('Sequelize').Op

const CarRentByPeriod = async (dataInicio, dataFim, res) => {

    const mysqldataInicio = new Date(dataInicio).toISOString().split("T")[0];
    const mysqldataFim = new Date(dataFim).toISOString().split("T")[0];

    Car.belongsTo(CarReserve, { foreignKey: 'idcarro' });
    CarReserve.hasMany(Car, { foreignKey: 'idcarro' });

    const cars = await CarReserve.findAll({
        include: [{
            model: Car,
            required: true, // do an INNER Join 
        }],
        where: {
            [Op.and]:
            [
                {
                    dt_inicio_reserva: {
                        [Op.gte]: [mysqldataInicio]
                    }
                },
                {
                    dt_fim_reserva: {
                        [Op.lte]: [mysqldataFim]
                    }
                }
            ]
        }
    }).then(c => {
        return res.status(200).json(c);
    }).catch(error => {
        return res.status(400).send("Fetching has failed :" + error);
    });
}
    module.exports = { CarRentByPeriod };
