import { errorResponse } from '../utils/response';
import { statusCodes } from '../utils/status';
import messages from '../utils/message';

const userSession = (req, res, next) => {
    if (!(req.session && req.session.userId)){
        return errorResponse(res, statusCodes.unauthorized, messages.unauthorized);
    }

    return next();
}

const adminSession = (req, res, next) => {
    if (!(req.session && req.session.userId && req.session.role === 'admin')){
        return errorResponse(res, statusCodes.unauthorized, messages.unauthorized);
    }

    return next();
}

export { userSession, adminSession }