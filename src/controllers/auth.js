import bcrypt from 'bcrypt';
import { userModel } from '../database/model';
import { successResponseWithData, errorResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';
import { findUser } from '../services/auth';

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const name = `${firstName} ${lastName}`;
        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new userModel({
            name,
            email,
            password: passwordHash,
            role: 'user'
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

        const match = await bcrypt.compare(password, userData.password);

        if (!match ) {
            errorResponse(res, error.statusCode || statusCodes.unauthorized, messages.wrongPassword);
        }

        req.session.userId = userData._id;
        req.session.userRole = userData.role;

        successResponseWithData(res, statusCodes.success, messages.login, userData);

    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error); 
    }
}

export { createUser, loginUser }