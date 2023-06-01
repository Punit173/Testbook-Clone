const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
    QuestionName: String,
    QuestionUrl: String,
    createdAt : {
        type: Date,
        default: Date.now(),
    },
    Answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }
});

module.exports = mongoose.model("Question", QuestionSchema);