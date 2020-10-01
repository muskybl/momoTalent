const router = require('express').Router();
const quizController = require('../controllers/Quiz.controller');

router.get('/', quizController.getQuiz);

router.post('/', quizController.addQuiz);

router.get('/lists', quizController.getListQuiz);

router.post('/score', quizController.addScores);

module.exports = router;
