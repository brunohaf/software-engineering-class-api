const RentalStoreService = require('../Services/RentalStoreService');
const router = require('express').Router();


/**
 *  @swagger
 * /GetRentalStoreById:
 *   get:
 *     tags:
 *     - "RentalStore"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "header"
 *       name: "id"
 *       description: ""
 *       required: false
 *     responses:
 *       200:
 *         description: "Bot added Successfully"
 *       304:
 *         description: "Bot already added"
 *       401:
 *         description: "Wrong bot identifier or access_key"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/', async (req, res) => {
    return await RentalStoreService.GetRentalStoreById(req, res);
})

/**
 *  @swagger
 * /GetRentalStores:
 *   get:
 *     tags:
 *     - "RentalStore"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     responses:
 *       200:
 *         description: "Bot added Successfully"
 *       304:
 *         description: "Bot already added"
 *       401:
 *         description: "Wrong bot identifier or access_key"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/', async (req, res) => {
    return await RentalStoreService.GetRentalStores(req, res);
})

/**
 *  @swagger
 * /SaveRentalStore:
 *   post:
 *     tags:
 *     - "RentalStore"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Bot configuration, must have identifier and access_key, may have category_failed, action_failed, category_accepted, action_accepted, category_received, action_received, category_consumed, action_consumed. Where in both categories and actions you can specify 4 variables: {{template}}, {{phone}}, {{sentDate}} or {{nowDate}}"
 *       required: false
 *       schema:
 *         type: "object"
 *         properties:
 *           identifier:
 *              type: "string"
 *           access_key:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "Bot added Successfully"
 *       304:
 *         description: "Bot already added"
 *       401:
 *         description: "Wrong bot identifier or access_key"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.post('/', async (req, res) => {
    return await RentalStoreService.SaveRentalStore(req, res);
})

/**
 *  @swagger
 * /UpdateRentalStore:
 *   put:
 *     tags:
 *     - "RentalStore"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Bot configuration, must have identifier and access_key, may have category_failed, action_failed, category_accepted, action_accepted, category_received, action_received, category_consumed, action_consumed. Where in both categories and actions you can specify 4 variables: {{template}}, {{phone}}, {{sentDate}} or {{nowDate}}"
 *       required: false
 *       schema:
 *         type: "object"
 *         properties:
 *           identifier:
 *              type: "string"
 *     responses:
 *       200:
 *         description: "Bot added Successfully"
 *       304:
 *         description: "Bot already added"
 *       401:
 *         description: "Wrong bot identifier or access_key"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.put('/', async (req, res) => {
    return await RentalStoreService.UpdateRentalStore(req, res);
})

/**
 *  @swagger
 * /DeleteRentalStore:
 *   delete:
 *     tags:
 *     - "RentalStore"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "header"
 *       name: "id"
 *       description: ""
 *       required: true
 *     responses:
 *       200:
 *         description: "Bot added Successfully"
 *       304:
 *         description: "Bot already added"
 *       401:
 *         description: "Wrong bot identifier or access_key"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.delete('/', async (req, res) => {
    return await RentalStoreService.DeleteRentalStore(req, res);
})


module.exports = router;