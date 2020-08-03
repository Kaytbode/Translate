import mongoose from 'mongoose';
import { User, Phrase } from './schema';

const userModel = mongoose.model('User', User);
const phraseModel = mongoose.model('Phrase', Phrase);


export { userModel, phraseModel }