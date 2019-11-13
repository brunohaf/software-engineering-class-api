const user_service = require('../services/user-service');
const router = require('express').Router();

/**
 *  @swagger
 * /SaveUser:
 *   get:
 *     tags:
 *     - "user"
 *     summary: "Add a new bot Configurations"
 *     description: "Add a new bot Configurations"
 *     parameters:
 *     - in: "header"
 *       name: "name"
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
    ;
    user_service.SaveUser(req.header('name'),res);

    return 200;
})

module.exports = router;
