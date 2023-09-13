const { userService} = require("../service");

async function signUp( req,res ){
    try{
        const data = req.body;
        const response = await userService.signUp(data);

        return res.status(201).json({
            success:true,
            message:"Successfully created a User",
            data: response,
            err:{}
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in creating a user",
            data: {},
            err:error
        });
    }
}


async function signIn( req,res ){
    try{
        const data = req.body;
        const response = await userService.signIn(data);

        return res.status(201).json({
            success:true,
            message:"Successfully Signed a User",
            data: response,
            err:{}
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in creating a user",
            data: {},
            err:error
        });
    }
}


module.exports = {
    signUp,
    signIn,
}