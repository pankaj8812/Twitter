const mongoose = require("mongoose");
const { User } = require("../model");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
}

module.exports = UserRepository;