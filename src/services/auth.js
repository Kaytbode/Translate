import userModel from '../database/model';

const newUser = async (user) => {
    try {
        return await user.save();
    }catch(err){
        throw err;
    }
}

const findUser = async (userEmail) => {
    try {
        return await userModel.findOne({email: userEmail}).exec();
    }catch(err){
        throw err;
    }
}

export { newUser, findUser }
