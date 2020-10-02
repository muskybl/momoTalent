const Question = require('../models/Question')

exports.createQuestion = async (req, res) => {
    const { content } = req.body
    try {
        await Question.create({
            content: content
        })
        return res.status(200).json({ message: "Ok" })
    } catch (error) {
        if (error) console.log(error)
        else console.log('OK')
    }
}
exports.getRandomQuestion = async (req, res) => {
    const number = req.query.number
    Question.findRandom({}, {}, { limit: number }, (err, result) => {
        if (err) console.log(err)
        else {
            const questions = result.map((q) => q.content)
            return res.status(200).json({
                data: questions
            })
        }
    })
}