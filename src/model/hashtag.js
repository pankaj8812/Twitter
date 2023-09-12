const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema({
    text : {
        type: String,
        required : true,
        unqiue: true,
    },
    tweets : [
        { type: mongoose.Schema.Types.ObjectId }
    ]
});

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

module.exports = Hashtag;