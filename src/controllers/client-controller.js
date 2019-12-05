const client_service = require('../services/client-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveClient:
 *   post:
 *     tags:
 *     - "Client"
 *     summary: "Add a new Client to the database"
 *     description: "Add a new Client to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A Client must have all the properties"
 *       required: false
 *       schema:
 *         type: "Client"
 *         properties:
 *           idcliente:
 *              type: "integer"
 *           cpf:
 *              type: "integer"
 *           nm_cliente:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "Client added Successfully"
 *       304:
 *         description: "Client already added"
 *       401:
 *         description: "Wrong Client properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return client_service.SaveClient(req.body,res);
});

/**
 *  @swagger
 * /UpdateClient:
 *   put:
 *     tags:
 *     - "Client"
 *     summary: "Update a Client on the database"
 *     description: "Update a Client on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "'id' is obligatory to update a Client"
 *       required: false
 *       schema:
 *         type: "Client"
 *         properties:
 *           id:
 *              type: "integer"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "Client updated Successfully"
 *       401:
 *         description: "Wrong Client's 'idClientro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return client_service.UpdateClient(req.body,res);
});

/**
 *  @swagger
 * /GetAllClients:
 *   get:
 *     tags:
 *     - "Client"
 *     summary: "Get all Clients on the database"
 *     description: "Get all Clients on the database"
 *     responses:
 *       200:
 *         description: "The Clients were found!"
 *       401:
 *         description: "Clients were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return client_service.GetAllClients(res);
});

/**
 *  @swagger
 * /GetClient/byId:
 *   get:
 *     tags:
 *     - "Client"
 *     summary: "Find a Client on the database"
 *     description: "Find a Client on the database"
 *     parameters:
*     - in: "header"
 *       name: "id"
 *       description: "'id' is obligatory to update a Client"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Client was found!"
 *       401:
 *         description: "Wrong Client's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    return client_service.GetClientById(req.header('id'),res);
});

/**
 *  @swagger
 * /DeleteClient:
 *   delete:
 *     tags:
 *     - "Client"
 *     summary: "Erase a Client from the database"
 *     description: "Erase a Client on the database"
 *     parameters:
*     - in: "header"
 *       name: "id"
 *       description: "'id' is obligatory to erase a Client"
 *       required: true
 *     responses:
 *       200:
 *         description: "The Client is now gone!"
 *       401:
 *         description: "Wrong Client's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return client_service.DeleteClient(req.header('id'),res);
});

module.exports = router;
