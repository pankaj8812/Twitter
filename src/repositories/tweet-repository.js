const mongoose = require("mongoose");
const { Tweet } = require("../model");
const CrudRepository = require("./crud-repository");

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
}

module.exports = TweetRepository;