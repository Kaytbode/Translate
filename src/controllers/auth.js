import { userModel } from '../database/model';
import { successResponseWithData, errorResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';
import { findUser } from '../services/auth';

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const name = `${firstName} ${lastName}`;

        const user = new userModel({
            name,
            email,
            password
        });

        const userData = await user.save();
        
        successResponseWithData(res, statusCodes.created, messages.created, userData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }

}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userData = await findUser(email);

        if (userData.password !== password ) {
            errorResponse(res, error.statusCode || statusCodes.unauthorized, messages.wrongPassword);
        }

        successResponseWithData(res, statusCodes.success, messages.login, userData);

    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error); 
    }
}

export { createUser, loginUser }