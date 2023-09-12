const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },

    // Dynamic Reference
    // Like can be done on a Tweet or a comment 
    onModel: {
        type: String,
        required: true,
        enum: ["Tweet", "Comment"]
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "onModel"
    }
    
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;