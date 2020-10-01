const router = require('express').Router();
const userController = require('../controllers/User.controller');

router.post('/', userController.createUser);

module.exports = router;
