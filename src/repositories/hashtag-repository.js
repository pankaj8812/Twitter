const CrudRepository = require("./crud-repository");
const Hashtag = require("../model/hashtag");

class hashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    async bulkCreate (data) {
        try{
            // console.log("bulkCreate :", data);
             const tags = await Hashtag.insertMany(data);
             return tags;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    //get by name
    async getHashtagByName(tag)
    {
        try {
            // console.log("text :", tag);
             let hashtag = await Hashtag.find({
                text: tag
             });
             return hashtag;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = hashtagRepository; 