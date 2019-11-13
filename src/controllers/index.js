const router = require('express').Router();

//router.use('/create-user', require('./user-controller'));

//module.exports = router;

router.use('/SaveUser', require('./user-controller'));

//Car CRUD EndPoints
router.use('/SaveCar', require('./car-controller'));
router.use('/UpdateCar', require('./car-controller'));
router.use('/GetCar', require('./car-controller'));
router.use('/GetAllCars', require('./car-controller'));
router.use('/DeleteCar', require('./car-controller'));

module.exports = router;