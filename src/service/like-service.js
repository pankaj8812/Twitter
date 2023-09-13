const { LikeRepository, TweetRepository } = require("../repositories");

const likeRepo = new LikeRepository();
const tweetRepo = new TweetRepository();

async function toggleLike(data){
    try {
        let likeable;
        console.log("DATA :", data);
        if(data.modelType == "Tweet"){
            likeable = await tweetRepo.get(data.modelId);
        }else if(data.modelType == "Comment"){
            //todo
        }else{
            console.log("wrong modeltype");
        }
        const exists = await likeRepo.getOne({
            user: data.userId,
            onModel: data.modelType,
            likeable: data.modelId
        });
        console.log("exists : ", exists);
        let isAdded;
        if(exists){
            console.log("exists : ", exists);
            likeable.likes.pull(exists.id);
            await likeable.save();
            likeRepo.delete(exists.id);
            // this.likeRepo.destroy(exists.id);
            isAdded = false;
        }else{
            const newLike = await likeRepo.create({
                user: data.userId,
                onModel: data.modelType,
                likeable: data.modelId 
            });
            console.log("newLike :", newLike);
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