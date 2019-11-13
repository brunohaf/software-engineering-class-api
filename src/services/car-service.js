const { Car } = require('../models/sequelize')

const SaveCar = (req, res) => {
    Car.create( {   cor_carro : req.cor_carro,
                    placa : req.placa,
                    categoria : req.categoria,
                    modelo : req.modelo,
                    fabricante : req.fabricante,
                    ano : req.ano
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed from the origin:\t" + error.errors[0].origin +
                    "\nError Message:\t" + error.errors[0].message )
                });
};

const UpdateCar = (req, res) => {
    Car.update( {    cor_carro : req.cor_carro,
                    placa : req.placa,
                    categoria : req.categoria,
                    modelo : req.modelo,
                    fabricante : req.fabricante,
                    ano : req.ano
                },
                {
                    where: {idcarro: req.idcarro}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error from the origin:\t" + error.errors[0].origin +
                     "\nError Message:\t" + error.errors[0].message )
                });;
};

const GetCarById = async (req,res) => {

    await Car.findByPk(req).then(car => {
        return res.status( 200 ).json(car.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetAllCars = async (res) => {
    await Car.findAll()
    .then( cars => {
      return res.status( 200 ).json( cars )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
      "\nError Message:\t" + error.errors[0].message )
    });
}

const DeleteCar = async (req,res) => {
    await Car.destroy({where: {idcarro: req}}).then(car => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

module.exports = { SaveCar,
                   UpdateCar,
                   GetCarById,
                   GetAllCars,
                   DeleteCar
                 };
