const car_service = require('../services/car-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveCar:
 *   post:
 *     tags:
 *     - "Car"
 *     summary: "Add a new Car to the database"
 *     description: "Add a new Car to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A Car must have all the properties"
 *       required: false
 *       schema:
 *         type: "carro"
 *         properties:
 *           cor_carro:
 *              type: "string"
 *           placa:
 *              type: "string"
 *           categoria:
 *              type: "string"
 *           modelo:
 *              type: "string"
  *           fabricante:
 *              type: "string"
 *           ano:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Car added Successfully"
 *       304:
 *         description: "Car already added"
 *       401:
 *         description: "Wrong Car properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    car_service.SaveCar(req.body,res);

    return 200;
});

/**
 *  @swagger
 * /UpdateCar:
 *   put:
 *     tags:
 *     - "Car"
 *     summary: "Update a Car on the database"
 *     description: "Update a Car on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'idcarro' is obligatory to update a Car"
 *       required: false
 *       schema:
 *         type: "carro"
 *         properties:
 *           idcarro:
 *              type: "integer"
 *           cor_carro:
 *              type: "string"
 *           placa:
 *              type: "string"
 *           categoria:
 *              type: "string"
 *           modelo:
 *              type: "string"
  *           fabricante:
 *              type: "string"
 *           ano:
 *              type: "integer"
 *     responses:
 *       200:
 *         description: "Car updated Successfully"
 *       401:
 *         description: "Wrong Car's 'idcarro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    car_service.UpdateCar(req.body,res);

    return 200;
});

/**
 *  @swagger
 * /GetAllCars:
 *   get:
 *     tags:
 *     - "Car"
 *     summary: "Get all Cars on the database"
 *     description: "Get all Cars on the database"
 *     responses:
 *       200:
 *         description: "The Cars were found!"
 *       401:
 *         description: "Cars were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    car_service.GetAllCars(res);
    console.log("ao controller aí gente")

    return 200;
});

/**
 *  @swagger
 * /GetCar/byId:
 *   get:
 *     tags:
 *     - "Car"
 *     summary: "Find a Car on the database"
 *     description: "Find a Car on the database"
 *     parameters:
*     - in: "header"
 *       name: "idcarro"
 *       description: "'idcarro' is obligatory to update a Car"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Car was found!"
 *       401:
 *         description: "Wrong Car's 'idcarro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    car_service.GetCarById(req.header('idcarro'),res);

    return 200;
});

/**
 *  @swagger
 * /DeleteCar:
 *   delete:
 *     tags:
 *     - "Car"
 *     summary: "Erase a Car from the database"
 *     description: "Erase a Car on the database"
 *     parameters:
*     - in: "header"
 *       name: "idcarro"
 *       description: "'idcarro' is obligatory to erase a Car"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Car is now gone!"
 *       401:
 *         description: "Wrong Car's 'idcarro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    car_service.DeleteCar(req.header('idcarro'),res);

    return 200;
});

module.exports = router;
