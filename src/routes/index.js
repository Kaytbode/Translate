import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth';
import { createPhrase, searchPhrase, getMissingPhrases } from '../controllers/search';
import { signUpValidationRules, loginValidationRules, validateResult } from '../validation/auth';
import { createPhraseValidationRules, searchPhraseValidationRules } from '../validation/search';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('Welcome to translate'));

routes.post('/auth/signup', signUpValidationRules, validateResult, createUser);
routes.post('/auth/login', loginValidationRules, validateResult, loginUser);
routes.post('/phrase/create', createPhraseValidationRules, validateResult, createPhrase);
routes.get('/phrase/search/:searchPhrase', searchPhraseValidationRules, validateResult, searchPhrase);
routes.get('/phrase/missing', getMissingPhrases);

export default routes;
