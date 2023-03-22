const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    wanted_answers: {
        type: Array,
        default: [],
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    answer: {
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    },
    answered: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);