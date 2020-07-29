import mongoose from 'mongoose';
import { User } from 'schema';

const userModel = mongoose.model('User', User);


export { userModel }