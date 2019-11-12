const router = require('express').Router();

router.use('/create-user', require('./user-controller'));

module.exports = router;
