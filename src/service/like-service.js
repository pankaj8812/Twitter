const { LikeRepository, TweetRepository, CommentRepository } = require("../repositories");

const likeRepo = new LikeRepository();
const tweetRepo = new TweetRepository();
const commentRepo = new CommentRepository();

async function toggleLike(data){
    try {
        let likeable;
        console.log("DATA :", data);
        if(data.modelType == "Tweet"){
            likeable = await tweetRepo.get(data.modelId);
        }else if(data.modelType == "Comment"){
            likeable = await commentRepo.get(data.modelId);
        }else{
            throw { message: "wrong modeltype"};
        }
        const exists = await likeRepo.getOne({
            user: data.userId,
            onModel: data.modelType,
            likeable: data.modelId
        });
        let isAdded;
        if(exists){
            // console.log("exists : ", exists);
            likeable.likes.pull(exists.id);
            await likeable.save();
            likeRepo.delete(exists.id);
            isAdded = false;
        }else{
            const newLike = await likeRepo.create({
                user: data.userId,
                onModel: data.modelType,
                likeable: data.modelId 
            });
            // console.log("newLike :", newLike);
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true;
        }
        console.log(isAdded);
        return isAdded;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    toggleLike,
};