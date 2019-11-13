const user_service = require('../services/user-service');
const router = require('express').Router();

/**
 *  @swagger
 * /CarRentByPeriod:
 *   get:
 *     tags:
 *     - "user"
 *     summary: ""
 *     description: ""
 *     parameters:
 *     - in: "header"
 *       name: "dataInicio"
 *       type: "string"
 *       format: date
 *       description: ""
 *       required: false
 *     - in: "header"
 *       name: "dataFim"
 *       type: "string"
 *       format: date
 *       description: ""
 *       required: false
 *     responses:
 *       200:
 *         description: "Success"
 *       500:
 *         description: "Ops... something wrong happened"
 */
router.get('/', async (req, res) => {
    user_service.CarRentByPeriod(req.header('dataInicio'),req.header('dataFim'), res);

    return 200;
})

module.exports = router;
