const passport = require("passport");

function authenticate(req,res,next){
    passport.authenticate('jwt',(err,user) =>{
        if(err) 
        next(err);
        if(!user) {
            return res.status(401).json({
                messsage:'Unauthorise access '
            })
        }
        req.user = user;
        console.log(req.user);
        next();
    })(req,res,next);
}

module.exports = authenticate;