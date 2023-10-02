const { UserRepositiory } = require("../repositories");

const UserRepo = new UserRepositiory();

async function signUp(data){
    try {
        const user = await UserRepo.create(data);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function signIn(data){
    try {
        const user = await UserRepo.getOne({email : data.email});
        
        if(!user){
            throw {message: "User not found"};
        }

        if(!user.comparePassword(data.password)){
            throw{
                message: 'Incorrect password'
            }
        }
        
        // console.log("successfully logged in"); 
        const token = user.genJWT();
        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    signIn,
    signUp,
};