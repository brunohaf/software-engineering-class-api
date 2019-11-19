const { Car } = require('../models/sequelize')
const { CarReserve } = require('../models/sequelize')
const Op = require('sequelize').Op

const CarRentByPeriod = async (dataInicio, dataFim, res) => {
    const dateCondition =
    {
        [Op.and]: [
            {
                'dt_inicio_reserva': {
                    [Op.gte]: dataInicio
                },
            },
            {
                'dt_fim_reserva': {
                    [Op.lte]: dataFim
                }
            }
        ]
    }

    CarReserve.belongsTo(Car, { foreignKey: 'idcarro' });
    Car.hasMany(CarReserve, { foreignKey: 'idcarro' }, { targetKey: 'idcarro' });

     await CarReserve.findAll({
        include: [{
            model: Car,
            required: true,
        }],
        where: [dateCondition]
    }).then(response => {
        return res.status(200).json(response.map(c => c.carro));
    }).catch(error => {
        return res.status(400).send("Fetching has failed: \t" + error)
    });
}

const CarFreeForRentByPeriod = async (dataInicio, dataFim, res) => {

    const dateCondition = {
        [Op.or]: [
            {
                [Op.and]: [
                    {
                        'dt_inicio_reserva': {
                            [Op.lt]: dataInicio
                        }
                    },
                    {
                        'dt_fim_reserva': {
                            [Op.lt]: dataFim
                        }
                    }
                ]
            },
            {
                [Op.and]: [
                    {
                        'dt_inicio_reserva': {
                            [Op.gt]: dataInicio
                        }
                    },
                    {
                        'dt_fim_reserva': {
                            [Op.gt]: dataFim
                        }
                    }
                ]
            }
        ]
    }

    CarReserve.belongsTo(Car, { foreignKey: 'idcarro' });
    Car.hasMany(CarReserve, { foreignKey: 'idcarro' }, { targetKey: 'idcarro' });

     await CarReserve.findAll({
        include: [{
            model: Car,
            required: true,
        }],
        where: [dateCondition]
    }).then(response => {
        return res.status(200).json(response.map(c => c.carro));
    }).catch(error => {
        return res.status(400).send("Fetching has failed: \t" + error)
    });
}

module.exports = {
    CarRentByPeriod,
    CarFreeForRentByPeriod
};

