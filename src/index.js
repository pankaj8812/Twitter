const express = require("express");
const  Connect = require("./config/dataBase.js");
const { ServerConfig } = require("./config");
const apiRouter = require("./router");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter)




app.listen(ServerConfig.PORT, async()=>{
    console.log("Server is up on port :", ServerConfig.PORT);
    await Connect();
    console.log("connect to database");    
})


