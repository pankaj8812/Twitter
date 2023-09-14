const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

UserSchema.methods.genJWT  = function generate(){
    return jwt.sign({
        id:this._id,
        email:this.email
    },'twitter_secret',{
        expiresIn:'2h'
    })

}

const User = mongoose.model("User", UserSchema);

module.exports = User;