const mongoose = require("mongoose");
const { Like } = require("../model");
const CrudRepository = require("./crud-repository");

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

module.exports = LikeRepository;