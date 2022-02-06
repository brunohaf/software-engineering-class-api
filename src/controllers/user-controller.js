const user_service = require('../services/user-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveUser:
 *   post:
 *     tags:
 *     - "User"
 *     summary: "Add a new User to the database"
 *     description: "Add a new User to the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           id_user:
 *              type: "string"
 *           password:
 *              type: "string"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "User added Successfully"
 *       304:
 *         description: "User already added"
 *       401:
 *         description: "Wrong User properties"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return user_service.SaveUser(req.body,res);
});

/**
 *  @swagger
 * /UpdateUser:
 *   put:
 *     tags:
 *     - "User"
 *     summary: "Update a User on the database"
 *     description: "Update a User on the database"
 *     parameters:
*     - in: "body"
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           id_user:
 *              type: "string"
 *           password:
 *              type: "string"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "User updated Successfully"
 *       401:
 *         description: "Wrong User's 'idUserro'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.put('/', async (req, res) => {
    return user_service.UpdateUser(req.body,res);
});

/**
 *  @swagger
 * /GetAllUsers:
 *   get:
 *     tags:
 *     - "User"
 *     summary: "Get all Users on the database"
 *     description: "Get all Users on the database"
 *     responses:
 *       200:
 *         description: "The Users were found!"
 *       401:
 *         description: "Users were not found'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/', async (req, res) => {
    return user_service.GetAllUsers(res);
});

/**
 *  @swagger
 * /GetUser/byId:
 *   get:
 *     tags:
 *     - "User"
 *     summary: "Find a User on the database"
 *     description: "Find a User on the database"
 *     parameters:
*     - in: "header"
 *       name: "id"
 *       description: "'id' is obligatory to update a User"
 *       required: true
 *     responses:
 *       200:
 *         description: "The User was found!"
 *       401:
 *         description: "Wrong User's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.get('/byId', async (req, res) => {
    return user_service.GetUserById(req.header('id'),res);
});

/**
 *  @swagger
 * /DeleteUser:
 *   delete:
 *     tags:
 *     - "User"
 *     summary: "Erase a User from the database"
 *     description: "Erase a User on the database"
 *     parameters:
*     - in: "header"
 *       name: "id"
 *       description: "'id' is obligatory to erase a User"
 *       required: true
 *     responses:
 *       200:
 *         description: "The User is now gone!"
 *       401:
 *         description: "Wrong User's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.delete('/', async (req, res) => {
    return user_service.DeleteUser(req.header('id'),res);
});

/**
 *  @swagger
 * /Login:
 *   post:
 *     tags:
 *     - "User"
 *     summary: "Login a User"
 *     description: "Login a User"
 *     parameters:
 *       name: "body"
 *       description: "A User must have all the properties"
 *       required: false
 *       schema:
 *         type: "user_web"
 *         properties:
 *           id_user:
 *              type: "string"
 *           password:
 *              type: "string"
 *           name:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "The User is now gone!"
 *       401:
 *         description: "Wrong User's 'id'"
 *       500:
 *         description: "Ops... something REALLY wrong happened"
 */
router.post('/', async (req, res) => {
    return user_service.Login(req,res);
});

module.exports = router;
