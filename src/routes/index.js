import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth';
import { signUpValidationRules, loginValidationRules, validateResult } from '../validation/auth';

const routes = Router();

routes.post('/auth/signup', signUpValidationRules, validateResult, createUser);
routes.post('/auth/login', loginValidationRules, validateResult, loginUser);

export default routes;
