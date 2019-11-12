const { User } = require('../models/sequelize')

const SaveUser = (req, res) => {
    return User.create({ name: 'test' });
};

module.exports = { SaveUser };
