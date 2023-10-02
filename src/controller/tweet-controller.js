const { tweetService } = require("../service");
const upload = require("../config/file-upload-S3");


async function creatTweet(req,res){
    try {
        const singleUploader = upload.single('image');
        console.log(req.body);

        singleUploader(req,res, async function(err,data){
            if(err){
                console.log(err)
            }
            console.log(req.file);
            const tweet = await tweetService.creatTweet({
                content: req.body.content,
                noOfRetweets: req.body.noOfRetweets,
                user: req.user,
                image: req.file.location,
            });
            return res.status(201).json({
                success:true,
                message:"Successfully created a tweet",
                data: tweet,
                err:{}
            });

        })

    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getAllTweet(req,res){
    try {
        // console.log(req.body);
        const tweets = await tweetService.getAllTweet();
        return  res.status(201).json({
            success:true,
            message:"Successfully found  tweets",
            data: tweets,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getTweet(req,res){
    try {
        // console.log(req.params.id);
        const tweet = await tweetService.getTweet(req.params.id);
        return  res.status(201).json({
            success:true,
            message:"Successfully found a tweet",
            data: tweet,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function updateTweet(req,res){
    try {
        const tweets = await tweetService.updateTweet(req.params.id, {
            content: req.body.content,
            likes: req.body.likes,
            noOfRetweets: req.body.noOfRetweets,
            comment: req.body.comment,
        });
        return  res.status(201).json({
            success:true,
            message:"Successfully update a tweet",
            data: tweets,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function deleteTweet(req,res){
    try {
        const tweets = await tweetService.deleteTweet(req.params.id);
        return  res.status(201).json({
            success:true,
            message:"Successfully delete a tweet",
            data: tweets,
            err:{}
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = {
    creatTweet,
    getAllTweet,
    getTweet,
    updateTweet,
    deleteTweet,
}