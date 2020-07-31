import { check, validationResult } from 'express-validator';
import { findUser } from '../services/auth';
import messages from '../utils/message';
import statusCodes from '../utils/status';
import { errorResponse } from '../utils/response';


const signUpValidationRules = [
  check('email')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField)
    .isEmail()
    .withMessage(messages.invalidEmail)
    .custom( async (userEmail) => {
        const user = await findUser(userEmail);
        if(user) throw new Error (messages.emailExists);
    }),
  check('firstName')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('lastName')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('password')
    .isLength({ min: 8 })
    .withMessage(messages.shortPassword)
    .custom(async (value, { req }) => {
        if(value !== req.body.confirmPassword ){
            throw new Error(messages.noMatch);
        }
  })
]

const validateResult = (req, res, next) => {
  const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return errorResponse(res, statusCodes.unprocessableEntity, extractedErrors);
}

export { validateResult, signUpValidationRules }