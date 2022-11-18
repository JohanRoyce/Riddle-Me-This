let mongoose = require('mongoose');
// create a riddle model
let riddleModel = mongoose.Schema({
    poster: String,
    date: String,
    question: String,
    answer: String
    },
    {
        collection: "riddles"
    }
);
module.exports = mongoose.model('Riddle', riddleModel);