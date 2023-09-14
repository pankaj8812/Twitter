const { TweetRepository, CommentRepository } = require("../repositories");

const commentRepo = new CommentRepository();
const tweetRepo = new TweetRepository();

async function createComment(data){
    try {
        const comment = await commentRepo.create(data);
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