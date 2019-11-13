const { User } = require('../models/sequelize')

const SaveUser = (req, res) => {
    return res.json(User.create({ name: req }));
};

module.exports = { SaveUser };
