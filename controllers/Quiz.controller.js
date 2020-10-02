const Quiz = require('../models/Quiz');

exports.getQuiz = async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(404).json({ message: 'Cannot find quiz.' });
  const quiz = await Quiz.findOne({
    username: username
  });

  return res.status(200).json({ data: quiz });
};

exports.addQuiz = async (req, res) => {
  const { username, questions, score } = req.body;
  const hasQuiz = await Quiz.findOne({ username: username })
  if (hasQuiz) {
    return res.status(400).json({
      message: 'Quiz has already exist'
    })
  }
  const newQuiz = new Quiz({
    username: username,
    questions: questions,
    score: score,
  });

  try {
    await newQuiz.save();
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  return res.status(201).json({ message: 'Created.' });
};

exports.getListQuiz = async (req, res) => {
  const list = await Quiz.find({});
  return res.status(200).json({
    data: list,
  });
};

exports.addScores = async (req, res) => {
  const { owner, guest, mark } = req.body;
  const quiz = await Quiz.findOne({ username: owner });

  if (!quiz) {
    return res.status(404).json({
      message: 'Invalid room.',
    });
  }

  quiz.score = [...quiz.score, { guest: guest, mark: mark }];

  try {
    await quiz.save();
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  return res.status(201).json({ message: 'Add score successfully' });
};
