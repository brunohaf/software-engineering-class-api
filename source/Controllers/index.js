const router = require('express').Router();

router.use('/SaveCar', require('./CarController'));
router.use('/GetCarById', require('./CarController'));
router.use('/GetCars', require('./CarController'));
router.use('/DeleteCar', require('./CarController'));
router.use('/UpdateCars', require('./CarController'));

module.exports = router;
