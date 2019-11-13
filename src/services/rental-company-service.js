const { RentalCompany } = require('../models/sequelize')

const SaveRentalCompany = (req, res) => {
    RentalCompany.create( {   nm_locadora : req.nm_locadora,
                              cnpj : req.cnpj,
                              categoria : req.categoria,
                              endereco : req.endereco,
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed from the origin:\t" + error.errors[0].origin +
                    "\nError Message:\t" + error.errors[0].message )
                });
};

const UpdateRentalCompany = (req, res) => {
    RentalCompany.update( {    nm_locadora : req.nm_locadora,
                               cnpj : req.cnpj,
                               categoria : req.categoria,
                               endereco : req.endereco,
                },
                {
                    where: {idlocadora: req.idlocadora}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error from the origin:\t" + error.errors[0].origin +
                     "\nError Message:\t" + error.errors[0].message )
                });;
};

const GetRentalCompanyById = async (req,res) => {

    await RentalCompany.findByPk(req).then(rentalCompany => {
        return res.status( 200 ).json(rentalCompany.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetAllRentalCompanies = async (res) => {
    await RentalCompany.findAll()
    .then( cars => {
      return res.status( 200 ).json( cars )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
      "\nError Message:\t" + error.errors[0].message )
    });
}

const DeleteRentalCompany = async (req,res) => {
    await RentalCompany.destroy({where: {idlocadora: req}}).then(rentalCompany => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

module.exports = { SaveRentalCompany,
                   UpdateRentalCompany,
                   GetRentalCompanyById,
                   GetAllRentalCompanies,
                   DeleteRentalCompany
                 };
