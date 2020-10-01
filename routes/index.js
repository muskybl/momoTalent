const mainRouter = require('express').Router();
const quizRouter = require('./quiz');

mainRouter.use('/quiz', quizRouter);

module.exports = mainRouter;
