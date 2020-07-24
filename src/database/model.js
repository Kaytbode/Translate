import mongoose from 'mongoose';
import { User } from 'schema';

const user = mongoose.model('User', User);


export { user }