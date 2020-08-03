import { check, validationResult } from 'express-validator';
import messages from '../utils/message';

const createPhraseValidationRules = [
  check('english')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('yoruba')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('link')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
]

const searchPhraseValidationRules = [
  check('english')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField)
]

export { createPhraseValidationRules, searchPhraseValidationRules }