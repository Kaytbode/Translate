import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth';
import { createPhrase, searchPhrase } from '../controllers/search';
import { signUpValidationRules, loginValidationRules, validateResult } from '../validation/auth';
import { createPhraseValidationRules, searchPhraseValidationRules } from '../validation/search';

const routes = Router();

routes.post('/auth/signup', signUpValidationRules, validateResult, createUser);
routes.post('/auth/login', loginValidationRules, validateResult, loginUser);
routes.post('/phrase/create', createPhraseValidationRules, validateResult, createPhrase);
routes.get('/phrase/search', searchPhraseValidationRules, validateResult, searchPhrase);

export default routes;
