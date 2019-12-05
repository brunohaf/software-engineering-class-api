const { Client } = require('../models/sequelize')

const SaveClient = (req, res) => {
    Client.create( {   nm_cliente : req.nm_cliente,
                       cpf : req.cpf
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed from the origin:\t" + error.errors[0].origin +
                    "\nError Message:\t" + error.errors[0].message )
                });
};

const UpdateClient = (req, res) => {
    Client.update( {    nm_cliente : req.nm_cliente,
                        cpf : req.cpf
                },
                {
                    where: {idcliente: req.idcliente}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error from the origin:\t" + error.errors[0].origin +
                     "\nError Message:\t" + error.errors[0].message )
                });;
};

const GetClientById = async (req,res) => {

    await Client.findByPk(req).then(Client => {
        return res.status( 200 ).json(Client.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetAllClients = async (res) => {
    await Client.findAll()
    .then( Clients => {
      return res.status( 200 ).json( Clients )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
      "\nError Message:\t" + error.errors[0].message )
    });
}

const DeleteClient = async (req,res) => {
    await Client.destroy({where: {idcliente: req}}).then(Client => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

module.exports = { SaveClient,
    UpdateClient,
    GetClientById,
    GetAllClients,
    DeleteClient
  };