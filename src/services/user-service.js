const { Car } = require('../models/sequelize')
const { CarReserve } = require('../models/sequelize')
const Op = require('Sequelize').Op

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
    Car.hasMany(CarReserve, { foreignKey: 'idcarro' }, { targetKey: 'idcarro' } );

    const cars = await CarReserve.findAll({
        include: [{
            model: Car,
            required: true, // do an INNER Join 
        }],
        where: [dateCondition]
    }).then( response =>{
        return res.status( 200 ).json(response.map(c => c.carro));
    }).catch( error => {
        return res.status( 400 ).send( "Fetching has failed: \t" + error)
    });
};
    module.exports = { CarRentByPeriod };

    