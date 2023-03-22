const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    quirky: {
        content: String,
        is5thRaised: Boolean
    },
    serious: {
        content: String,
        is5thRaised: Boolean
    },
    combined: {
        content: String,
        is5thRaised: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Answer', AnswerSchema);