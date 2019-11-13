const router = require('express').Router();

//router.use('/create-user', require('./user-controller'));

//module.exports = router;

router.use('/SaveUser', require('./user-controller'));

module.exports = router;