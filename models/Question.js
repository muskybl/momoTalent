const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    content: {
        type: String,
        required: true
    }
})
questionSchema.plugin(random)
const Question = mongoose.model('Question', questionSchema)
module.exports = Question