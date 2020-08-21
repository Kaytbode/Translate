import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { userModel } from '../database/model';
import { successResponseWithData, errorResponse, successResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';
import { findUser } from '../services/auth';

dotenv.config();

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
            errorResponse(res, statusCodes.unauthorized, messages.wrongPassword);
        }

        req.session.userId = userData._id;
        req.session.userRole = userData.role;

        successResponseWithData(res, statusCodes.success, messages.login, userData);

    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error); 
    }
}

const logoutUser = (req, res) => {
    req.session.destroy( error => {
        if(error){
            errorResponse(res, statusCodes.serverError, messages.logoutError);
        }

        res.clearCookie(process.env.SESS_NAME);

        successResponse(res, statusCodes.success, messages.logout)
    })
}

export { createUser, loginUser, logoutUser }