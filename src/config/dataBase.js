const mongoose = require("mongoose");
const {Mongo_URL} = require("./server-config");

const Connect = async () => {
    await mongoose.connect(Mongo_URL);
}


module.exports =  Connect ;