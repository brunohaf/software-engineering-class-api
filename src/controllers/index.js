const router = require('express').Router();

router.use('/CarRentByPeriod', require('./user-controller'));

//Car CRUD EndPoints
router.use('/SaveCar', require('./car-controller'));
router.use('/UpdateCar', require('./car-controller'));
router.use('/GetCar', require('./car-controller'));
router.use('/GetAllCars', require('./car-controller'));
router.use('/DeleteCar', require('./car-controller'));

//CarReserve CRUD EndPoints
router.use('/SaveCarReserve', require('./car-reserve-controller'));
router.use('/UpdateCarReserve', require('./car-reserve-controller'));
router.use('/GetCarReserve', require('./car-reserve-controller'));
router.use('/GetAllCarReserves', require('./car-reserve-controller'));
router.use('/DeleteCarReserve', require('./car-reserve-controller'));

//RentalCompany CRUD EndPoints
router.use('/SaveRentalCompany', require('./rental-company-controller'));
router.use('/UpdateRentalCompany', require('./rental-company-controller'));
router.use('/GetRentalCompany', require('./rental-company-controller'));
router.use('/GetAllRentalCompanys', require('./rental-company-controller'));
router.use('/DeleteRentalCompany', require('./rental-company-controller'));

module.exports = router;