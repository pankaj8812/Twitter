const  dotenv = require("dotenv");

dotenv.config();

module.exports = { 
    PORT: process.env.PORT,
    Mongo_URL: process.env.Mongo_URL,
}
