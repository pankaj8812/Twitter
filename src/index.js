const Express = require("express");
const  Connect = require("./config/dataBase.js");
const Tweet = require("./model/tweet.js")
const { ServerConfig } = require("./config");
const app = Express();



app.listen(ServerConfig.PORT, async()=>{
    console.log("Server is up on port :", ServerConfig.PORT);
    
    await Connect();
    console.log("connect to database");

    // Tweet.create({
    //     content: "This is my third tweet",
    //     likes: 25,
    //     noOfRetweets: 5,
    //     comment: "This is my firts comment"
    // })
    
})


