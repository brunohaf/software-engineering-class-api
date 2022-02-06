const { User } = require('../models/sequelize')
const password_service = require('./password-services');

const SaveUser = (req, res) => {
    let pass = password_service.cipher(req.password);
    User.create( {   name : req.name,
                     id_user : req.email,
                     password: pass
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Saving has failed from the origin:\t" + error.errors[0].origin +
                    "\nError Message:\t" + error.errors[0].message )
                });
};

const Login = (req, res) => {
    await GetUserById(req.email).then(User => {
        return res.status( 200 ).json(ValidatePassword(User, req.password));
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
};

const ValidatePassword = (user, passwordCandidate) => {
    let pass = password_service.cipher(passwordCandidate);
    return user.password == pass;
}

const UpdateUser = (req, res) => {
    let pass = password_service.cipher(req.password);
    User.update( {   name : req.name,
                     id_user : req.email,
                     password: pass
                },
                {
                    where: {idUsere: req.idUsere}
                }).then( response =>{
                    return res.status( 200 ).json("Success!");
                }).catch( error => {
                    return res.status( 400 ).send( "Update has an error from the origin:\t" + error.errors[0].origin +
                     "\nError Message:\t" + error.errors[0].message )
                });;
};

const GetUserById = async (req,res) => {
    await User.findByPk(req).then(User => {
        return res.status( 200 ).json(User.dataValues);
    } ).catch( error => {
        return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

const GetAllUsers = async (res) => {
    await User.findAll()
    .then( Users => {
      return res.status( 200 ).json( Users )
    })
    .catch( error => {
      return res.status( 400 ).send( "Fetching has failed from the origin:\t" + error.errors[0].origin +
      "\nError Message:\t" + error.errors[0].message )
    });
}

const DeleteUser = async (req,res) => {
    await User.destroy({where: {id_user: req}}).then(User => {
        return res.status( 200 ).json("Success!");
    } ).catch( error => {
        return res.status( 400 ).send( "Delete has failed from the origin:\t" + error.errors[0].origin +
        "\nError Message:\t" + error.errors[0].message )
      });
}

module.exports = { SaveUser,
    UpdateUser,
    GetUserById,
    GetAllUsers,
    DeleteUser,
    Login
  };