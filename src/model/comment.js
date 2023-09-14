const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId
    },
    content: {
        type : String,
        required: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    
    // Dynamic Reference
    // comment can be mode on a Tweet or a comment itself
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
})

const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;