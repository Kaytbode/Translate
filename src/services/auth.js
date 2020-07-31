import { userModel } from '../database/model';

const findUser = async (userEmail) => {
    try {
        return await userModel.findOne({email: userEmail}).exec();
    }catch(err){
        throw err;
    }
}

export { findUser }
