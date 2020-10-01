const mainRouter = require('express').Router();
const quizRouter = require('./quiz');
const userRouter = require('./user');
mainRouter.use('/quiz', quizRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;
