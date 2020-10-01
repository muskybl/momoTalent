const Quiz = require('../models/Quiz');

exports.getQuiz = async (req, res) => {
  const { username } = req.query;

  if (!id) return res.status(404).json({ message: 'Cannot find quiz.' });

  const quiz = await Quiz.findOne({
    username: username,
  });

  return res.status(200).json({ data: quiz });
};

exports.addQuiz = async (req, res) => {
  const { username, questions } = req.body;

  const newQuiz = new Quiz({
    username: username,
    questions: question,
    score: [],
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
  const { owner, guest, score } = req.body;
  const quiz = await Quiz.findOne({ username: owner });

  if (!quiz) {
    return res.status(404).json({
      message: 'Invalid room.',
    });
  }

  quiz.score = [...quiz.score, { username: guest, score: score }];

  try {
    await quiz.save();
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  return res.status(201).json({ message: 'Add score successfully' });
};
