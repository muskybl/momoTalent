const router = require('express').Router();
const questionController = require('../controllers/Question.controller')

router.get('/', questionController.getRandomQuestion)
router.post('/', questionController.createQuestion)

module.exports = router