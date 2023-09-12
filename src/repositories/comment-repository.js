const mongoose = require("mongoose");
const { Comment } = require("../model");
const CrudRepository = require("./crud-repository");

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
}

module.exports = CommentRepository;