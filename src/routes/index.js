import { Router } from 'express';
import { createUser } from '../controllers/auth';
import { signUpValidationRules, validateResult } from '../validation/auth';

const routes = Router();

routes.post('/auth/signup', signUpValidationRules, validateResult, createUser);

export default routes;
