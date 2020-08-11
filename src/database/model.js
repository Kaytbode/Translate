import mongoose from 'mongoose';
import { User, Phrase, Missing } from './schema';

const userModel = mongoose.model('User', User);
const phraseModel = mongoose.model('Phrase', Phrase);
const missingModel = mongoose.model('Missing', Missing);


export { userModel, phraseModel, missingModel }