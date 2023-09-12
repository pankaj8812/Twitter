const {TweetRepository, HashtagRepository} = require("../repositories");

const tweetrepo = new TweetRepository();
const hashtagRepo = new HashtagRepository();

async function creatTweet(data){
    try {
        const tweet = await tweetrepo.create(data);
        
        const content = data.content;
        let tags  = content.match(/#+[a-zA-Z0-9(_)]+/g).map( (tag) => tag.substring(1).toLowerCase()); 
        
        // console.log(tags);
        let alreadyPresentTags = await hashtagRepo.getHashtagByName(tags);
        let textOfPresentTags = alreadyPresentTags.map( (tag) => tag.text);
        let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
        // console.log(alreadyPresentTags);
        newTags = newTags.map( tag => {
            return {
                text: tag,
                tweets: [tweet.id]
            }
        })
        await hashtagRepo.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAllTweet(){
    try {
        const tweets = await tweetrepo.getAll();
        return tweets;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getTweet(id){
    try {
        const tweet = await tweetrepo.get(id);
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateTweet(id, data){
    try {
        const tweet = await tweetrepo.update(id, data);
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function deleteTweet(data){
    try {
        const tweet = await tweetrepo.delete(data);
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    creatTweet,
    getAllTweet,
    getTweet,
    updateTweet,
    deleteTweet,
}