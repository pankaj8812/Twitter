const { commentService } = require("../service");


async function createComment(req,res){
    try {
        console.log(req.body);
        const comment = await commentService.createComment({
            content: req.body.content,
            likes: req.body.likes,
            comment: req.body.comment,
            userId: req.body.userId,

            onModel: req.body.onModel,
            commentable: req.body.commentable,
        });
        return res.status(201).json({
            success:true,
            message:"Successfully created a tweet",
            data: comment,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getAllComment(req,res){
    try {
        // console.log(req.body);
        const comments = await commentService.getAllComment(req.params.id);
        return  res.status(201).json({
            success:true,
            message:"Successfully found comments",
            data: comments,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getComment(req,res){
    try {
        // console.log(req.params.id);
        const comment = await commentService.getComment(req.params.id);
        return  res.status(201).json({
            success:true,
            message:"Successfully found a comment",
            data: comment,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function updateComment(req,res){
    try {
        const comment = await commentService.updateComment(req.params.id, {
            content: req.body.content,
            likes: req.body.likes,
            noOfRetweets: req.body.noOfRetweets,
            comment: req.body.comment,
        });
        return  res.status(201).json({
            success:true,
            message:"Successfully update a comment",
            data: comment,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function deleteComment(req,res){
    try {
        const comment = await commentService.deleteComment(req.params.id);
        return  res.status(201).json({
            success:true,
            message:"Successfully delete a comment",
            data: comment,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = {
    createComment,
    getAllComment,
    getComment,
    updateComment,
    deleteComment,
}