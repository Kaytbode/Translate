import { check, param } from 'express-validator';
import messages from '../utils/message';

const createPhraseValidationRules = [
  check('english')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('yor_explanation')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('yor_spoken')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('yor_intonation')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
  check('yor_video')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField),
]

const searchPhraseValidationRules = [
  param('searchPhrase')
    .not()
    .isEmpty()
    .withMessage(messages.emptyField)
]

export { createPhraseValidationRules, searchPhraseValidationRules }