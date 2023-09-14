const mongoose = require("mongoose");
const { Comment } = require("../model");
const CrudRepository = require("./crud-repository");

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }

    async getAllCommentOnTweet(id){
        try {
            const response = await Comment.find({ commentable: id });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentRepository;