import userModel from '../database/model';
import { successResponseWithData, errorResponse } from '../utils/response';
import statusCodes from '../utils/status';
import messages from '../utils/message';

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const user = new userModel({
            name: {
                first: firstName,
                last: lastName
            },
            email,
            password
        });

        const userData = await user.save();

        successResponseWithData(res, statusCodes.created, messages.created, userData);
    }catch(error) {
        errorResponse(res, error.statusCode || statusCodes.serverError, error);
    }

}

export { createUser }