import { Router } from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/auth';
import { 
    createPhrase, searchPhrase, getMissingPhrases, getAllPhrases, removePhrase, editPhrase } from '../controllers/search';
import { signUpValidationRules, loginValidationRules, validateResult } from '../validation/auth';
import { 
    createPhraseValidationRules, 
    searchPhraseValidationRules,
    delPhraseValidationRules,
    editPhraseValidationRules
 } from '../validation/search';
import { userSession, adminSession } from '../middlewares/auth';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('Welcome to translate'));

routes.post('/auth/signup', signUpValidationRules, validateResult, createUser);
routes.post('/auth/login', loginValidationRules, validateResult, loginUser);
routes.post('/auth/logout', userSession, logoutUser);
routes.post('/phrase/create', adminSession, createPhraseValidationRules, validateResult, createPhrase);
routes.get('/phrase/search/:searchPhrase', userSession, searchPhraseValidationRules, validateResult, searchPhrase);
routes.get('/phrase/missing', adminSession, getMissingPhrases);
routes.get('/phrase/all', adminSession, getAllPhrases);
routes.patch('/phrase/update', adminSession, editPhraseValidationRules, validateResult, editPhrase);
routes.delete('/phrase/delete', adminSession, delPhraseValidationRules, validateResult, removePhrase);

export default routes;
