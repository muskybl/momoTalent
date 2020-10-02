const mainRouter = require('express').Router();
const quizRouter = require('./quiz');
const userRouter = require('./user');
const questionRouter = require('./question')
mainRouter.use('/quiz', quizRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/question', questionRouter)
module.exports = mainRouter;
