const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  username: {
    type: String,
    require: true,
  },

  questions: {
    type: Array,
  },

  score: {
    type: Array,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
