const { TweetRepository, CommentRepository } = require("../repositories");

const commentRepo = new CommentRepository();
const tweetRepo = new TweetRepository();

async function createComment(data){
    try {
        const comment = await commentRepo.create(data);

        if(data.onModel == "Tweet"){
            const tweet = await tweetRepo.get(data.commentable);
            tweet.comments.push(comment.id);
            await tweet.save();

        } else  if(data.onModel == "Comment"){
            const oldComment = await commentRepo.get(data.commentable);
            oldComment.comments.push(comment.id);
            await oldComment.save();

        } 

        return comment;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function getAllComment(tweetId){
    try {
        console.log("TweetId :", tweetId);
        const response = await commentRepo.getAllCommentOnTweet(tweetId);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function getComment(id){
    try {
        
        const comment = await commentRepo.get(id);
        return comment;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateComment(id, data){
    try {
        const response = await commentRepo.update(id, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function deleteComment(data){
    try {
        const response = await commentRepo.delete(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    createComment,
    getAllComment,
    getComment,
    updateComment,
    deleteComment,
}