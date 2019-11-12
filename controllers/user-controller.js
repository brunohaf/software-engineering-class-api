const user_service = require('../services/user-service');
const router = require('express').Router();

router.get('/', async (req, res) => {
    user_service.SaveUser(req.body);

    return 200;
})

module.exports = router;
