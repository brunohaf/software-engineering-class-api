const { Car } = require('../models/sequelize')
const { CarReserve } = require('../models/sequelize')
const Op = require('Sequelize').Op

const CarRentByPeriod = async (dataInicio, dataFim, idcarro, res) => {

 /*   const mysqldataInicio = new Date(dataInicio).toLocaleString();
    const mysqldataFim = new Date(dataFim);

    var condition = 
{ 
  [Op.or]: [ 
   { 
    dt_inicio_reserva: {
      [Op.gte]: mysqldataInicio
      },
    },
   { 
    dt_fim_reserva: {
      [Op.lte]: mysqldataFim
      }
   }
 ]
}

    CarReserve.belongsTo(Car, {foreignKey: 'idcarro'});
    Car.hasMany(CarReserve, {foreignKey: 'idcarro'});

    const cars = await Car.findAll({
        include: [{
            model: CarReserve,
            required: true, // do an INNER Join 
        }],
        where: [{
            "dt_inicio_reserva": {
                $between: [mysqldataInicio, mysqldataFim]
            },
        },
        {
            "dt_fim_reserva": {
                $between: [mysqldataInicio, mysqldataFim]
            }
        }
    ]});

    return res.json(cars);*/
    return '';
};

module.exports = { CarRentByPeriod };
