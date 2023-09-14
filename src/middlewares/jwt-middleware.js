const JWT = require("passport-jwt");
const User = require("../model/user");


const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

function passportAuth(passport){
    passport.use(new JwtStrategy(opts, async(jwt_payload,done)=>{
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null,false);
        }
        else{
            done(null,user);
        }
    }))
}

module.exports = passportAuth;