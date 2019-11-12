const IndexService = require('../Services/IndexService');
const router = require('express').Router();


/**
 *  @swagger
 * /test:
 *   get:
 *     tags:
 *     - "test"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "header"
 *       name: "header"
 *       description: "Bot configuration, must have identifier and access_key, may have category_failed, action_failed, category_accepted, action_accepted, category_received, action_received, category_consumed, action_consumed. Where in both categories and actions you can specify 4 variables: {{template}}, {{phone}}, {{sentDate}} or {{nowDate}}"
 *       required: false
 *       schema:
 *         type: "object"
 *         properties:
 *           identifier:
 *              type: "string"
 *           access_key:
 *              type: "string"
 *           category_accepted:
 *              type: "string"
 *           action_accepted:
 *              type: "string"
 *           category_received:
 *              type: "string"
 *           action_received:
 *              type: "string"
 *           category_consumed:
 *              type: "string"
 *           action_consumed:
 *              type: "string"
 *           category_failed:
 *              type: "string"
 *           action_failed:
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
router.get('/', async (req, res) => {
    return await IndexService.index(req, res);
})


module.exports = router;