import { User, Phrase, Missing, dbConnection } from './schema';

const userModel = dbConnection.model('User', User);
const phraseModel = dbConnection.model('Phrase', Phrase);
const missingModel = dbConnection.model('Missing', Missing);


export { userModel, phraseModel, missingModel }