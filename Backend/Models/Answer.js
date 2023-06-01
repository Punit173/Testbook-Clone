const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    Answer: String,
    QuestionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Answer", AnswerSchema);