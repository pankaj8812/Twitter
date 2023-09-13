const { likeService } = require("../service");


async function toggleLike(req,res){
    try {
        const tweet = await likeService.toggleLike({
            userId: req.body.userId,
            modelType: req.body.modelType,
            modelId: req.body.modelId,
        });
        return res.status(201).json({
            success:true,
            message:"Successfully toggled a like",
            data: tweet,
            err:{}
        });;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    toggleLike,
};