const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userName: {
       type: String,
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
    },
    password: {
        type: String,
    },
    bio: {
        type: String,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
    
});

const User = mongoose.model("User", UserSchema);

module.exports = User;