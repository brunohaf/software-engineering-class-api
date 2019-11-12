const router = require('express').Router();

router.use('/SaveCar', require('./CarController'));
router.use('/GetCarById', require('./CarController'));
router.use('/GetCars', require('./CarController'));
router.use('/DeleteCar', require('./CarController'));
router.use('/UpdateCars', require('./CarController'));

router.use('/SaveCarReserve', require('./CarReserveController'));
router.use('/GetCarReserveById', require('./CarReserveController'));
router.use('/GetCarReserves', require('./CarReserveController'));
router.use('/DeleteCarReserve', require('./CarReserveController'));
router.use('/UpdateCarReserves', require('./CarReserveController'));

router.use('/SaveRentalStore', require('./RentalStoreController'));
router.use('/GetRentalStoreById', require('./RentalStoreController'));
router.use('/GetRentalStores', require('./RentalStoreController'));
router.use('/DeleteRentalStore', require('./RentalStoreController'));
router.use('/UpdateRentalStores', require('./RentalStoreController'));

module.exports = router;
