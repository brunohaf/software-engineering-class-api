const { CarReserve } = require('../models/sequelize')

const SaveCarReserve = (req, res) => {
    CarReserve.create( {  
                            idcliente : req.idcliente,
                            idcarro : req.idcarro,
                            idlocadora : req.idlocadora,
                            dt_inicio_reserva : new Date(req.dt_inicio_reserva).toISOString(),
                            dt_fim_reserva : new Date(req.dt_fim_reserva).toISOString(),
                            reservado : req.reservado ? 1 : 0,
                            cidade : req.cidade
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed: \t" + error)
                });
}

const UpdateCarReserve = (req, res) => {
    CarReserve.update( {    idcliente : req.idcliente,
                            idlocadora : req.idlocadora,
                            idcarro : req.idcarro,
                            dt_inicio_reserva : req.dt_inicio_reserva,
                            dt_fim_reserva : req.dt_fim_reserva,                    
                            reservado : req.reservado,
                            cidade : req.cidade
                },
                {
                    where: {idreserva_carro: req.idreserva_carro}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error: \t" + error )
                });;
}

const GetCarReserveById = async (req,res) => {

    await CarReserve.findByPk(req).then(carReserve => {
        return res.status( 200 ).json(carReserve.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed: \t" + error )
      });
}

const GetAllCarReserves = async (res) => {
    await CarReserve.findAll()
    .then( carReserves => {
      return res.status( 200 ).json( carReserves )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed:\t" + error)
    });
}

const DeleteCarReserve = async (req,res) => {
    await CarReserve.destroy({where: {idreserva_carro: req}}).then(carReserve => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed:\t" + error )
      });
}

module.exports = { SaveCarReserve,
                   UpdateCarReserve,
                   GetCarReserveById,
                   GetAllCarReserves,
                   DeleteCarReserve
                 };
