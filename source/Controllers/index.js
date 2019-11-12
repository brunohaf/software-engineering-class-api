const router = require('express').Router();

router.use('/test', require('./IndexController'));

module.exports = router;
