const car_reserve_service = require('../services/car-reserve-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveCarReserve:
 *   post:
 *     tags:
 *     - "CarReserve"
 *     summary: "Add a new CarReserve to the database"
 *     description: "Add a new CarReserve to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A CarReserve must have all the properties"
 *       required: false
 *       schema:
 *         type: "CarReserve"
 *         properties:
 *           idcliente:
 *              type: "integer"
 *           idcarro:
 *              type: "integer"
 *           idlocadora:
 *              type: "integer"
 *           dt_inicio_reserva:
 *              type: "string"
 *              format: date
 *           dt_fim_reserva:
 *              type: string
 *              format: date
 *           reservado:
 *              type: "boolean"
 *           cidade:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "CarReserve added Successfully"
 *       304:
 *         description: "CarReserve already added"
 *       401:
 *         description: "Wrong CarReserve properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return car_reserve_service.SaveCarReserve(req.body,res);
});

/**
 *  @swagger
 * /UpdateCarReserve:
 *   put:
 *     tags:
 *     - "CarReserve"
 *     summary: "Update a CarReserve on the database"
 *     description: "Update a CarReserve on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'idreserva_carro' is obligatory to update a CarReserve"
 *       required: false
 *       schema:
 *         type: "CarReserve"
 *         properties:
 *           idreserva_carro:
 *              type: "integer"
 *           idcliente:
 *              type: "integer"
 *           idcarro:
 *              type: "integer"
 *           idlocadora:
 *              type: "integer"
 *           dt_inicio_reserva:
 *              type: "string"
 *              format: date
 *           dt_fim_reserva:
 *              type: string
 *              format: date
 *           reservado:
 *              type: "boolean"
 *           cidade:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "CarReserve added Successfully"
 *       304:
 *         description: "CarReserve already added"
 *       401:
 *         description: "Wrong CarReserve properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return car_reserve_service.UpdateCarReserve(req.body,res);
});

/**
 *  @swagger
 * /GetAllCarReserves:
 *   get:
 *     tags:
 *     - "CarReserve"
 *     summary: "Get all CarReserves on the database"
 *     description: "Get all CarReserves on the database"
 *     responses:
 *       200:
 *         description: "The CarReserves were found!"
 *       401:
 *         description: "CarReserves were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return car_reserve_service.GetAllCarReserves(res);
});

/**
 *  @swagger
 * /GetCarReserve/byId:
 *   get:
 *     tags:
 *     - "CarReserve"
 *     summary: "Find a CarReserve on the database"
 *     description: "Find a CarReserve on the database"
 *     parameters:
*     - in: "header"
 *       name: "idreserva_carro"
 *       description: "'idreserva_carro' is obligatory to update a CarReserve"
 *       required: true
 *     responses:
 *       200:
 *         description: "The CarReserve was found!"
 *       401:
 *         description: "Wrong CarReserve's 'idreserva_carro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    return car_reserve_service.GetCarReserveById(req.header('idreserva_carro'),res);
});

/**
 *  @swagger
 * /DeleteCarReserve:
 *   delete:
 *     tags:
 *     - "CarReserve"
 *     summary: "Erase a CarReserve from the database"
 *     description: "Erase a CarReserve on the database"
 *     parameters:
*     - in: "header"
 *       name: "idreserva_carro"
 *       description: "'idreserva_carro' is obligatory to erase a CarReserve"
 *       required: true
 *     responses:
 *       200:
 *         description: "The CarReserve is now gone!"
 *       401:
 *         description: "Wrong CarReserve's 'idreserva_carro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return car_reserve_service.DeleteCarReserve(req.header('idreserva_carro'),res);
});

module.exports = router;
