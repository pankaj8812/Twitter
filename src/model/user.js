const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = mongoose.Schema({
    name: {
       type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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


UserSchema.pre("save", function(next){
    const user = this;
    const salt = bcrypt.genSaltSync(8);
    const encryptedPassword = bcrypt.hashSync(user.password,salt);
    user.password = encryptedPassword;
    next();
})

UserSchema.methods.comparePassword = function compare(password){
    const user = this;
    return bcrypt.compareSync(password, user.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;